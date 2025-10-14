import { Section } from './Section';
import { Card } from './Card';

export function HowItWorks() {
  return (
    <Section background="gradient-soft" id="how-it-works">
      <h2 className="text-center mb-md">Nunca mais se perca no cultivo.</h2>
      <p className="text-center subheading mb-2xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-2xl)' }}>
        Na correria, anotar tudo é chato — e quando falha, o prejuízo é real. O My Bud registra seu diário de cultivo: fale, tire uma foto, filme e pronto! O app organiza por planta, data e fase. Você vê onde está e o que vem a seguir.
      </p>
      
      <div className="grid grid-3" style={{ marginTop: 'var(--spacing-xl)' }}>
        <Card 
          icon={<span style={{ fontSize: '32px' }}>🎙️</span>}
          title="Linha do tempo da planta"
          text="Histórico visual e organizado por estágios e dias."
        />
        <Card 
          icon={<span style={{ fontSize: '32px' }}>📸</span>}
          title="Registro por voz"
          text="Fale o que quiser e o My Bud transforma em nota ou tarefa."
        />
        <Card 
          icon={<span style={{ fontSize: '32px' }}>🌿</span>}
          title="Tarefas e lembretes"
          text="Nada fica pra trás: rega, poda, nutrientes no momento certo."
        />
      </div>
      
      <div className="grid grid-3" style={{ marginTop: 'var(--spacing-lg)' }}>
        <Card 
          icon={<span style={{ fontSize: '32px' }}>🏷️</span>}
          title="Stickers automáticos"
          text="QR codes com dados diretos do app (planta, estágio, dia)."
        />
        <Card 
          icon={<span style={{ fontSize: '32px' }}>📊</span>}
          title="Timeline clara"
          text="Veja o progresso de cada planta de forma visual e organizada."
        />
        <Card 
          icon={<span style={{ fontSize: '32px' }}>🔔</span>}
          title="Avisos inteligentes"
          text="Notificações no momento certo para não perder nenhuma etapa."
        />
      </div>
    </Section>
  );
}

