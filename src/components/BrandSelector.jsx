import { BRANDS, BRAND_ORDER } from '../data/pens';

export default function BrandSelector({ brandId, onChange }) {
  return (
    <div className="brand-selector">
      <label className="field-label">Marca da caneta</label>
      <div className="brand-buttons">
        {BRAND_ORDER.map((id) => (
          <button
            key={id}
            className={`brand-btn${brandId === id ? ' active' : ''}`}
            onClick={() => onChange(id)}
            type="button"
          >
            {BRANDS[id].label}
          </button>
        ))}
      </div>
    </div>
  );
}
