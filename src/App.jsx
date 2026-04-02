import { useRef, useState } from 'react';
import { BRANDS, DEFAULT_CLICKS_PER_DOSE } from './data/pens';
import { calcClicks, calcMgPerClick } from './utils/calculator';
import BrandSelector from './components/BrandSelector';
import PenSelector from './components/PenSelector';
import ClicksInput from './components/ClicksInput';
import DoseInput from './components/DoseInput';
import ResultDisplay from './components/ResultDisplay';
import ShareCard from './components/ShareCard';
import CopyImageButton from './components/CopyImageButton';
import InfoFooter from './components/InfoFooter';
import './styles/global.css';

const getFirstPenId = (brandId) => {
  const pens = BRANDS[brandId].pens;
  return pens.length > 0 ? pens[0].id : null;
};

const getFullDoseMg = (brandId, penId, customFullDoseMg) => {
  if (brandId === 'custom') return parseFloat(customFullDoseMg) || null;
  const pen = BRANDS[brandId].pens.find((p) => p.id === penId);
  return pen ? pen.fullDoseMg : null;
};

const getPenLabel = (brandId, penId, customFullDoseMg) => {
  if (brandId === 'custom') return `${customFullDoseMg} mg`;
  const pen = BRANDS[brandId].pens.find((p) => p.id === penId);
  return pen ? pen.label : '';
};

export default function App() {
  const [brandId, setBrandId] = useState('ozempic');
  const [penId, setPenId] = useState(getFirstPenId('ozempic'));
  const [clicksPerDose, setClicksPerDose] = useState(DEFAULT_CLICKS_PER_DOSE);
  const [desiredDoseMg, setDesiredDoseMg] = useState('');
  const [customFullDoseMg, setCustomFullDoseMg] = useState('');

  const shareCardRef = useRef(null);

  const fullDoseMg = getFullDoseMg(brandId, penId, customFullDoseMg);
  const clicks = calcClicks(desiredDoseMg, fullDoseMg, clicksPerDose);
  const mgPerClick = calcMgPerClick(fullDoseMg, clicksPerDose);
  const isValid = clicks !== null;
  const overDose = fullDoseMg && parseFloat(desiredDoseMg) > fullDoseMg;
  const isFractional = isValid && clicks % 1 !== 0 && clicks !== 0;

  const handleBrandChange = (newBrandId) => {
    setBrandId(newBrandId);
    setPenId(getFirstPenId(newBrandId));
    setDesiredDoseMg('');
    setCustomFullDoseMg('');
  };

  return (
    <div className="app-wrapper">
      <div className="app-card">
        <header className="app-header">
          <h1 className="app-title">SemagluDoses</h1>
          <p className="app-subtitle">Calcule os cliques da sua caneta de semaglutida</p>
        </header>

        <div className="form-section">
          <BrandSelector brandId={brandId} onChange={handleBrandChange} />
        </div>

        <div className="form-section">
          <PenSelector
            brandId={brandId}
            selectedPenId={penId}
            customFullDoseMg={customFullDoseMg}
            onPenChange={setPenId}
            onCustomDoseChange={setCustomFullDoseMg}
          />
        </div>

        <div className="form-section form-row">
          <ClicksInput value={clicksPerDose} onChange={setClicksPerDose} />
          <DoseInput
            value={desiredDoseMg}
            fullDoseMg={fullDoseMg}
            onChange={setDesiredDoseMg}
          />
        </div>

        <div className="result-section">
          <ResultDisplay
            clicks={clicks}
            mgPerClick={mgPerClick}
            isValid={isValid}
            overDose={overDose}
          />
          {isValid && <CopyImageButton shareCardRef={shareCardRef} />}
        </div>

        <InfoFooter />
      </div>

      {/* Card off-screen para captura da imagem — só montado quando há resultado válido */}
      {isValid && (
        <ShareCard
          ref={shareCardRef}
          brandLabel={BRANDS[brandId].label}
          penLabel={getPenLabel(brandId, penId, customFullDoseMg)}
          clicksPerDose={clicksPerDose}
          desiredDoseMg={desiredDoseMg}
          clicks={clicks}
          mgPerClick={mgPerClick}
          isFractional={isFractional}
          overDose={overDose}
        />
      )}
    </div>
  );
}
