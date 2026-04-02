import { BRANDS } from '../data/pens';

export default function PenSelector({ brandId, selectedPenId, customFullDoseMg, onPenChange, onCustomDoseChange }) {
  const brand = BRANDS[brandId];

  if (brandId === 'custom') {
    return (
      <div className="pen-selector">
        <label className="field-label" htmlFor="custom-dose">
          Dose cheia da caneta (mg)
        </label>
        <input
          id="custom-dose"
          className="text-input"
          type="number"
          min="0"
          step="0.01"
          placeholder="Ex: 1.5"
          value={customFullDoseMg}
          onChange={(e) => onCustomDoseChange(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="pen-selector">
      <label className="field-label">Dose cheia do cartucho</label>
      <div className="pen-buttons">
        {brand.pens.map((pen) => (
          <button
            key={pen.id}
            className={`pen-btn${selectedPenId === pen.id ? ' active' : ''}`}
            onClick={() => onPenChange(pen.id)}
            type="button"
          >
            {pen.label}
          </button>
        ))}
      </div>
    </div>
  );
}
