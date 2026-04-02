export default function ClicksInput({ value, onChange }) {
  return (
    <div className="clicks-input">
      <label className="field-label" htmlFor="clicks-per-dose">
        Cliques por dose cheia
      </label>
      <input
        id="clicks-per-dose"
        className="text-input"
        type="number"
        min="1"
        max="200"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="field-hint">Normalmente 70 cliques</span>
    </div>
  );
}
