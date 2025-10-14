import { FC, useState } from 'react';

const BetaAlertBar: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="beta-alert">
      <p>
        ⚡ Junte-se aos primeiros growers: o My Bud ainda está em beta, mas quem entra agora tem prioridade, voz ativa nas melhorias e acesso premium garantido.
      </p>
      <button 
        className="beta-alert-close" 
        onClick={() => setIsVisible(false)}
        aria-label="Fechar"
      >
        ✕
      </button>
    </div>
  );
};

export default BetaAlertBar;

