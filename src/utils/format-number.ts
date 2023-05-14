import numeral from "numeral";

export const formatNumber = (number: number) => {
  return numeral(number).format("0,0");
};

export const getDisplayGas = (number: number, baseNumber: number = 18) => {
  if (!number) return 0;
  return Number(number / Math.pow(10, baseNumber));
};

export const getDisplayGwei = (number: number, fixedNumber: number = 9) => {
  if (!number) return 0;
  return Number(number / Math.pow(10, 9)).toFixed(fixedNumber);
};

export const getDisplaySolGas = (number: number) => {
  return getDisplayGas(number, 9);
};
