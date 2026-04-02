import { useState } from 'react';
import html2canvas from 'html2canvas';

const STATES = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' };

const LABELS = {
  idle: 'Copiar imagem',
  loading: 'Copiando...',
  success: 'Copiado!',
  error: 'Erro, tente novamente',
};

export default function CopyImageButton({ shareCardRef }) {
  const [state, setState] = useState(STATES.idle);

  const handleCopy = async () => {
    if (state === STATES.loading) return;
    setState(STATES.loading);

    try {
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      );

      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);

      setState(STATES.success);
      setTimeout(() => setState(STATES.idle), 2500);
    } catch {
      setState(STATES.error);
      setTimeout(() => setState(STATES.idle), 3000);
    }
  };

  return (
    <button
      className={`copy-image-btn copy-image-btn--${state}`}
      onClick={handleCopy}
      type="button"
      disabled={state === STATES.loading}
    >
      {state === STATES.idle && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      {state === STATES.success && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {state === STATES.loading && (
        <svg className="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" />
        </svg>
      )}
      {LABELS[state]}
    </button>
  );
}
