export const convertHexToRGBA = (hex: string, opacity: number) => {
  if (!hex) return '';

  let tempHex = hex.replace('#', '');
  if (tempHex.length === 3) {
    tempHex += tempHex;
  }
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};
