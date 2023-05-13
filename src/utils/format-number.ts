import numeral from "numeral";

export const formatNumber = (number: Number) => {
  return numeral(number).format("0,0");
};

export const getEvmGas = (number: Number) => {
  return Number(Number(number) / Math.pow(10, 18)).toFixed(18);
};
