import { forwardRef } from 'react';

function formatNumber(n) {
  return n.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
}

const ShareCard = forwardRef(function ShareCard(
  { brandLabel, penLabel, clicksPerDose, desiredDoseMg, clicks, mgPerClick, isFractional, overDose },
  ref
) {
  return (
    <div ref={ref} className="share-card">
      <div className="share-card-header">
        <span className="share-card-title">SemagluDoses</span>
        <span className="share-card-subtitle">Caneta de Semaglutida</span>
      </div>

      <div className="share-card-body">
        <div className="share-card-info">
          <div className="share-info-row">
            <span className="share-info-label">Caneta</span>
            <span className="share-info-value">{brandLabel} {penLabel}</span>
          </div>
          <div className="share-info-row">
            <span className="share-info-label">Cliques por dose cheia</span>
            <span className="share-info-value">{clicksPerDose}</span>
          </div>
          <div className="share-info-row">
            <span className="share-info-label">Dose desejada</span>
            <span className="share-info-value">{desiredDoseMg} mg</span>
          </div>
        </div>

        <div className="share-card-result">
          <span className="share-result-number">{formatNumber(clicks)}</span>
          <span className="share-result-label">cliques</span>
          {mgPerClick !== null && (
            <p className="share-result-sub">{formatNumber(mgPerClick)} mg por clique</p>
          )}
        </div>

        {isFractional && (
          <div className="share-card-alert share-alert-info">
            Aproxime para {Math.floor(clicks)} ou {Math.ceil(clicks)} cliques conforme orientação médica.
          </div>
        )}

        {overDose && (
          <div className="share-card-alert share-alert-warning">
            Dose desejada maior que a dose cheia do cartucho. Verifique a caneta.
          </div>
        )}
      </div>

      <div className="share-card-footer">
        <p className="share-card-disclaimer">Esta ferramenta é apenas informativa. Consulte seu médico ou farmacêutico antes de alterar sua dose.</p>
        <span className="share-card-brand">SemagluDoses</span>
      </div>
    </div>
  );
});

export default ShareCard;
