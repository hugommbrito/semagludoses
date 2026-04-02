/**
 * Calcula o número de cliques necessários para atingir a dose desejada.
 * Arredonda para o 0,5 mais próximo.
 * Retorna null se qualquer entrada for inválida.
 */
export function calcClicks(desiredDoseMg, fullDoseMg, clicksPerDose) {
  const d = parseFloat(desiredDoseMg);
  const f = parseFloat(fullDoseMg);
  const c = parseFloat(clicksPerDose);
  if (!d || !f || !c) return null;
  if (d <= 0 || f <= 0 || c <= 0) return null;
  const raw = (d * c) / f;
  return Math.round(raw * 2) / 2;
}

/**
 * Calcula quantos mg são entregues por clique.
 * Retorna null se as entradas forem inválidas.
 */
export function calcMgPerClick(fullDoseMg, clicksPerDose) {
  const f = parseFloat(fullDoseMg);
  const c = parseFloat(clicksPerDose);
  if (!f || !c || c <= 0 || f <= 0) return null;
  return f / c;
}
