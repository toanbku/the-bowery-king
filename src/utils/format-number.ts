import numeral from "numeral";

export const formatNumber = (number: number) => {
  return numeral(number).format("0,0");
};

export const getDisplayGas = (number: number, fixedNumber: number = 18) => {
  return Number(number / Math.pow(10, 18)).toFixed(fixedNumber);
};
