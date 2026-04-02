export default function DoseInput({ value, fullDoseMg, onChange }) {
  const desired = parseFloat(value);
  const showOverWarning = fullDoseMg && desired > fullDoseMg;

  return (
    <div className="dose-input">
      <label className="field-label" htmlFor="desired-dose">
        Dose que quero tomar (mg)
      </label>
      <input
        id="desired-dose"
        className={`text-input${showOverWarning ? ' input-warning' : ''}`}
        type="number"
        min="0"
        step="0.01"
        placeholder="Ex: 0.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {showOverWarning && (
        <span className="field-warning">
          A dose desejada ({value} mg) é maior que a dose cheia do cartucho ({fullDoseMg} mg). Verifique se selecionou a caneta correta.
        </span>
      )}
    </div>
  );
}
