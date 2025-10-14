export const b2cContent = {
  hero: {
    title: 'mybud – o app de cultivo que cresce com você',
    subtitle: 'acompanhe seu cultivo de forma simples e privativa. junte-se ao beta e garanta acesso antecipado.',
    cta: 'garantir acesso antecipado'
  },
  betaSignup: {
    title: 'entre no beta',
    subtitle: 'deixe seu email para receber novidades e acesso ao app assim que estiver pronto',
    placeholder: 'seu melhor email',
    button: 'quero participar'
  },
  features: [
    {
      title: 'registre tudo',
      description: 'anote suas regas, fertilizantes e mais.',
    },
    {
      title: 'fotos do crescimento',
      description: 'acompanhe a evolução dia após dia.',
    },
    {
      title: 'privacidade garantida',
      description: 'dados só seus, armazenados com segurança.',
    },
  ]
} as const;

export type LandingContent = typeof b2cContent;
