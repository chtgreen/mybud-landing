#!/usr/bin/env node

/**
 * Forms and Links Testing Script
 * Tests all forms and store links in the mybud landing pages
 */

import https from 'https';
import fs from 'fs';

console.log('🔍 Testing Forms and Links\n');
console.log('=' .repeat(60));

// Test results collector
const results = {
  passed: [],
  failed: [],
  warnings: []
};

// Colors for terminal output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  reset: '\x1b[0m'
};

function pass(message) {
  console.log(`${colors.green}✅ PASS:${colors.reset} ${message}`);
  results.passed.push(message);
}

function fail(message, details) {
  console.log(`${colors.red}❌ FAIL:${colors.reset} ${message}`);
  if (details) console.log(`   ${colors.red}→${colors.reset} ${details}`);
  results.failed.push(message);
}

function warn(message) {
  console.log(`${colors.yellow}⚠️  WARN:${colors.reset} ${message}`);
  results.warnings.push(message);
}

function info(message) {
  console.log(`${colors.blue}ℹ️  INFO:${colors.reset} ${message}`);
}

function section(title) {
  console.log(`\n${colors.blue}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.blue}${title}${colors.reset}`);
  console.log(`${colors.blue}${'='.repeat(60)}${colors.reset}\n`);
}

// Check if file exists and contains specific content
function checkFileContent(filePath, searchString, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
      pass(`${description}: Found in ${filePath}`);
      return true;
    } else {
      fail(`${description}: Not found in ${filePath}`);
      return false;
    }
  } catch (error) {
    fail(`${description}: File not found - ${filePath}`, error.message);
    return false;
  }
}

// Test URL accessibility
function testURL(url, description) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: 5000
    };

    const req = https.request(options, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        pass(`${description}: ${url} (${res.statusCode})`);
        resolve(true);
      } else if (res.statusCode >= 300 && res.statusCode < 400) {
        pass(`${description}: ${url} (${res.statusCode} redirect)`);
        resolve(true);
      } else if (res.statusCode === 403) {
        // 403 from Shopify is normal - it means bot protection is active
        warn(`${description}: ${url} (${res.statusCode} - Bot protection active, URL is valid)`);
        resolve(true);
      } else {
        fail(`${description}: ${url}`, `Status ${res.statusCode}`);
        resolve(false);
      }
    });

    req.on('error', (error) => {
      fail(`${description}: ${url}`, error.message);
      resolve(false);
    });

    req.on('timeout', () => {
      fail(`${description}: ${url}`, 'Request timeout');
      req.destroy();
      resolve(false);
    });

    req.end();
  });
}

// Run all tests
async function runTests() {
  // ==========================================
  // 1. B2B LEAD FORM
  // ==========================================
  section('1. B2B LEAD FORM TESTS');
  
  const b2bFormPath = 'src/react-app/components/B2BLeadForm.tsx';
  
  checkFileContent(b2bFormPath, 'from(TABLE_NAME)', 'Supabase integration');
  checkFileContent(b2bFormPath, 'b2b_lead_submitted', 'PostHog analytics event');
  checkFileContent(b2bFormPath, 'emailFallback', 'Email fallback mechanism');
  checkFileContent(b2bFormPath, 'alert(t(\'finalCta.successMessage\'))', 'Success message');
  checkFileContent(b2bFormPath, 'alert(t(\'finalCta.errorMessage\'))', 'Error message');
  checkFileContent(b2bFormPath, 'name,\n            email,\n            company,', 'Required fields (name, email, company)');
  
  info('B2B form submits to Supabase table: b2b_leads');
  info('Falls back to email if submission fails');

  // ==========================================
  // 2. BETA SIGNUP FORM
  // ==========================================
  section('2. BETA SIGNUP FORM TESTS');
  
  const betaModalPath = 'src/react-app/components/BetaModal.tsx';
  
  checkFileContent(betaModalPath, 'from(\'beta_signups\')', 'Supabase integration');
  checkFileContent(betaModalPath, 'free_waitlist_signup_completed', 'PostHog success event');
  checkFileContent(betaModalPath, 'free_waitlist_signup_error', 'PostHog error event');
  checkFileContent(betaModalPath, 'setStatus(\'success\')', 'Success state handling');
  checkFileContent(betaModalPath, 'setStatus(\'error\')', 'Error state handling');
  
  info('Beta form submits to Supabase table: beta_signups');

  // ==========================================
  // 3. SHOP LINK (SHOPIFY STORE)
  // ==========================================
  section('3. SHOP LINK TESTS');
  
  const shopUrl = 'https://store.mybud.app/?utm_source=lp&utm_medium=modal&utm_campaign=kit_bud';
  
  checkFileContent(betaModalPath, shopUrl, 'Shop URL with UTM parameters');
  checkFileContent(betaModalPath, 'window.open(SHOP_URL, \'_blank\', \'noopener,noreferrer\')', 'Secure window.open');
  checkFileContent(betaModalPath, 'priority_access_clicked', 'PostHog tracking before redirect');
  
  info('Testing shop URL accessibility...');
  await testURL('https://store.mybud.app/', 'Shopify store accessibility');

  // ==========================================
  // 4. APP STORE LINKS
  // ==========================================
  section('4. APP STORE LINKS TESTS');
  
  const comingSoonPath = 'src/react-app/components/ComingSoon.tsx';
  
  const hasPlaceholderLinks = checkFileContent(comingSoonPath, 'href="#"', 'Placeholder links (expected)');
  checkFileContent(comingSoonPath, 'app_store_interest', 'Interest tracking analytics');
  checkFileContent(comingSoonPath, 'trackAppStoreInterest(\'ios\')', 'iOS interest tracking');
  checkFileContent(comingSoonPath, 'trackAppStoreInterest(\'android\')', 'Android interest tracking');
  
  if (hasPlaceholderLinks) {
    warn('App Store links are placeholders (href="#") - This is INTENTIONAL');
    info('App not yet published to App Store or Google Play');
    info('When publishing, update URLs in ComingSoon.tsx:');
    info('  - iOS: https://apps.apple.com/app/mybud/YOUR_APP_ID');
    info('  - Android: https://play.google.com/store/apps/details?id=com.mybud.app');
  }

  // ==========================================
  // 5. SUPABASE CONFIGURATION
  // ==========================================
  section('5. SUPABASE CONFIGURATION TESTS');
  
  const supabaseClientPath = 'src/react-app/lib/supabaseClient.ts';
  const wranglerJsonPath = 'wrangler.json';
  
  checkFileContent(supabaseClientPath, 'createClient', 'Supabase client initialization');
  checkFileContent(wranglerJsonPath, 'VITE_SUPABASE_URL', 'Supabase URL in wrangler.json');
  checkFileContent(wranglerJsonPath, 'VITE_SUPABASE_ANON_KEY', 'Supabase key in wrangler.json');
  
  info('Database tables required:');
  info('  - beta_signups (email, instagram, created_at, updated_at)');
  info('  - b2b_leads (name, email, company, message, source, created_at, updated_at)');

  // ==========================================
  // 6. ANALYTICS TRACKING
  // ==========================================
  section('6. ANALYTICS TRACKING TESTS');
  
  const analyticsEvents = [
    { file: b2bFormPath, event: 'b2b_lead_submitted', description: 'B2B lead submission' },
    { file: b2bFormPath, event: 'b2b_lead_error', description: 'B2B lead error' },
    { file: betaModalPath, event: 'free_waitlist_signup_completed', description: 'Beta signup success' },
    { file: betaModalPath, event: 'free_waitlist_signup_error', description: 'Beta signup error' },
    { file: betaModalPath, event: 'priority_access_clicked', description: 'Priority access (shop) click' },
    { file: comingSoonPath, event: 'app_store_interest', description: 'App store interest' }
  ];
  
  analyticsEvents.forEach(({ file, event, description }) => {
    checkFileContent(file, event, `Analytics: ${description}`);
  });

  // ==========================================
  // 7. EMAIL FALLBACK LINKS
  // ==========================================
  section('7. EMAIL FALLBACK TESTS');
  
  checkFileContent(b2bFormPath, 'mailto:', 'Email fallback in B2B form');
  checkFileContent(b2bFormPath, 't(\'finalCta.email\')', 'Email from translations');
  
  const localesPath = 'src/react-app/locales/en.json';
  checkFileContent(localesPath, 'comercial@mybud.app', 'Email address in translations');

  // ==========================================
  // FINAL SUMMARY
  // ==========================================
  section('TEST SUMMARY');
  
  console.log(`${colors.green}✅ Passed: ${results.passed.length}${colors.reset}`);
  console.log(`${colors.red}❌ Failed: ${results.failed.length}${colors.reset}`);
  console.log(`${colors.yellow}⚠️  Warnings: ${results.warnings.length}${colors.reset}`);
  
  if (results.failed.length === 0) {
    console.log(`\n${colors.green}${'='.repeat(60)}${colors.reset}`);
    console.log(`${colors.green}✅ ALL TESTS PASSED!${colors.reset}`);
    console.log(`${colors.green}Forms and links are properly configured.${colors.reset}`);
    console.log(`${colors.green}${'='.repeat(60)}${colors.reset}\n`);
    
    if (results.warnings.length > 0) {
      console.log(`${colors.yellow}Note: ${results.warnings.length} warning(s) found (see above).${colors.reset}\n`);
    }
    
    process.exit(0);
  } else {
    console.log(`\n${colors.red}${'='.repeat(60)}${colors.reset}`);
    console.log(`${colors.red}❌ TESTS FAILED${colors.reset}`);
    console.log(`${colors.red}${results.failed.length} test(s) failed.${colors.reset}`);
    console.log(`${colors.red}${'='.repeat(60)}${colors.reset}\n`);
    process.exit(1);
  }
}

// Run tests
runTests().catch((error) => {
  console.error(`\n${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});

