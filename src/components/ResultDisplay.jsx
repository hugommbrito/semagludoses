function formatNumber(n) {
  return n.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
}

export default function ResultDisplay({ clicks, mgPerClick, isValid, overDose }) {
  if (!isValid) {
    return (
      <div className="result-display result-placeholder">
        <p className="placeholder-text">Preencha os campos acima para ver o resultado</p>
      </div>
    );
  }

  const isFractional = clicks % 1 !== 0;
  const isZero = clicks === 0;

  return (
    <div className={`result-display${overDose ? ' result-warning-border' : ''}`}>
      <div className="result-clicks-row">
        <span className="result-clicks-number">{formatNumber(clicks)}</span>
        <span className="result-clicks-label">cliques</span>
      </div>

      {mgPerClick !== null && (
        <p className="result-mg-per-click">
          {formatNumber(mgPerClick)} mg por clique
        </p>
      )}

      {isZero && (
        <p className="result-alert result-alert-error">
          Dose muito baixa — resultaria em 0 cliques. Confirme a dose com seu prescritor.
        </p>
      )}

      {isFractional && !isZero && (
        <p className="result-alert result-alert-info">
          Resultado fracionado: aproxime para {Math.floor(clicks)} ou {Math.ceil(clicks)} cliques conforme orientação médica.
        </p>
      )}

      {overDose && (
        <p className="result-alert result-alert-warning">
          A dose desejada é maior que a dose cheia do cartucho. Verifique a caneta selecionada.
        </p>
      )}
    </div>
  );
}
