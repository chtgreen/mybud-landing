-- ============================================================
-- DISCORD NOTIFICATIONS - FINAL WORKING VERSION
-- ============================================================
-- This uses SQL triggers which are more reliable than Dashboard webhooks
-- ============================================================

-- Enable the HTTP extension
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;

-- Alternative: If http extension is not available, use pg_net
-- CREATE EXTENSION IF NOT EXISTS pg_net;

-- ============================================================
-- FUNCTION: Send Discord notification
-- ============================================================
CREATE OR REPLACE FUNCTION send_discord_notification()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://discord.com/api/webhooks/1435624849698721935/JusiNBNtdt4yf_Gb7UGK-DAkVVJ2m2a3DpvC0GlRp-Jy-P2MSor9AvkFVb3Pj-TpinZL';
  payload TEXT;
  http_request_id INT;
BEGIN
  -- Build payload based on table
  IF TG_TABLE_NAME = 'beta_signups' THEN
    payload := json_build_object(
      'content', '🌱 **New Beta Signup!**',
      'embeds', json_build_array(
        json_build_object(
          'title', 'Beta Signup',
          'color', 5763719,
          'fields', json_build_array(
            json_build_object('name', '👤 Name', 'value', COALESCE(NEW.name, 'N/A'), 'inline', true),
            json_build_object('name', '📧 Email', 'value', COALESCE(NEW.email, 'N/A'), 'inline', true),
            json_build_object('name', '📸 Instagram', 'value', COALESCE(NEW.instagram, 'N/A'), 'inline', true)
          )
        )
      )
    )::text;
    
  ELSIF TG_TABLE_NAME = 'b2b_leads' THEN
    payload := json_build_object(
      'content', '💼 **New B2B Lead!**',
      'embeds', json_build_array(
        json_build_object(
          'title', 'B2B Lead',
          'color', 15844367,
          'fields', json_build_array(
            json_build_object('name', '👤 Name', 'value', COALESCE(NEW.name, 'N/A'), 'inline', true),
            json_build_object('name', '📧 Email', 'value', COALESCE(NEW.email, 'N/A'), 'inline', true),
            json_build_object('name', '📱 Phone', 'value', COALESCE(NEW.phone, 'N/A'), 'inline', true),
            json_build_object('name', '🏢 Company', 'value', COALESCE(NEW.company, 'N/A'), 'inline', true)
          )
        )
      )
    )::text;
    
  ELSIF TG_TABLE_NAME = 'collective_leads' THEN
    payload := json_build_object(
      'content', '🏢 **New Collective Lead!**',
      'embeds', json_build_array(
        json_build_object(
          'title', 'Collective Lead',
          'color', 3447003,
          'fields', json_build_array(
            json_build_object('name', '🏪 Organization', 'value', COALESCE(NEW.organization_name, 'N/A'), 'inline', true),
            json_build_object('name', '📧 Email', 'value', COALESCE(NEW.email, 'N/A'), 'inline', true),
            json_build_object('name', '📱 WhatsApp', 'value', COALESCE(NEW.whatsapp, 'N/A'), 'inline', true),
            json_build_object('name', '🌱 Plants', 'value', COALESCE(NEW.plant_count, 'N/A'), 'inline', true)
          )
        )
      )
    )::text;
  END IF;

  -- Send using http extension (preferred)
  BEGIN
    PERFORM extensions.http_post(
      webhook_url,
      payload,
      'application/json'
    );
  EXCEPTION WHEN OTHERS THEN
    -- Fallback to pg_net if http extension fails
    BEGIN
      PERFORM net.http_post(
        url := webhook_url,
        headers := '{"Content-Type": "application/json"}'::jsonb,
        body := payload::jsonb
      );
    EXCEPTION WHEN OTHERS THEN
      RAISE WARNING 'Discord notification failed: %', SQLERRM;
    END;
  END;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- DROP OLD TRIGGERS
-- ============================================================
DROP TRIGGER IF EXISTS discord_notify_beta_signup ON beta_signups;
DROP TRIGGER IF EXISTS discord_notify_b2b_lead ON b2b_leads;
DROP TRIGGER IF EXISTS discord_notify_collective_lead ON collective_leads;
DROP TRIGGER IF EXISTS test_discord_trigger ON beta_signups;

-- ============================================================
-- CREATE NEW TRIGGERS
-- ============================================================
CREATE TRIGGER discord_notify_beta_signup
  AFTER INSERT ON beta_signups
  FOR EACH ROW
  EXECUTE FUNCTION send_discord_notification();

CREATE TRIGGER discord_notify_b2b_lead
  AFTER INSERT ON b2b_leads
  FOR EACH ROW
  EXECUTE FUNCTION send_discord_notification();

CREATE TRIGGER discord_notify_collective_lead
  AFTER INSERT ON collective_leads
  FOR EACH ROW
  EXECUTE FUNCTION send_discord_notification();

-- ============================================================
-- TEST THE SETUP
-- ============================================================
-- Uncomment one line to test:

-- Test beta signup:
-- INSERT INTO beta_signups (name, email, instagram) VALUES ('SQL Test', 'sqltest@mybud.com', '@sqltest');

-- Test B2B lead:
-- INSERT INTO b2b_leads (name, email, phone, company) VALUES ('SQL B2B Test', 'b2b@test.com', '+55 11 99999-9999', 'Test Company');

-- Test collective lead:
-- INSERT INTO collective_leads (organization_name, email, whatsapp, plant_count) VALUES ('SQL Collective', 'collective@test.com', '+55 11 98765-4321', '50-100');

-- ============================================================
-- VERIFY TRIGGERS ARE ACTIVE
-- ============================================================
SELECT 
    trigger_name,
    event_object_table,
    action_statement
FROM information_schema.triggers
WHERE trigger_name LIKE 'discord_notify%'
ORDER BY event_object_table;

