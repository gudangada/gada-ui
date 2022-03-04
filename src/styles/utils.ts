export const pxToRem = (px?: number, decimalPlaces = 3): string => {
  if (!px) return "0rem";
  const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${rem}rem`;
};
