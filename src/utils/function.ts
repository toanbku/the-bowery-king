import numeral from "numeral";

export const formatNumber = (number: number) => {
  return numeral(number).format("0,0");
};

export const getDisplayGas = (number: number, baseNumber: number = 18) => {
  if (!number) return 0;
  return removeTrailingZeros(
    Number(number / Math.pow(10, baseNumber)).toFixed(baseNumber)
  );
};

export const getDisplayGwei = (number: number, fixedNumber: number = 9) => {
  if (!number) return 0;
  return removeTrailingZeros(
    Number(number / Math.pow(10, 9)).toFixed(fixedNumber)
  );
};

export const getDisplaySolGas = (number: number) => {
  return getDisplayGas(number, 9);
};

export const removeTrailingZeros = (num: string) => {
  if (parseFloat(num) > 1) {
    return parseFloat(num);
  }

  const str = num.toString();
  const decimalIndex = str.indexOf(".");

  if (decimalIndex !== -1) {
    let trimmed = str.substring(0, decimalIndex + 1);
    let i = str.length - 1;

    while (i >= decimalIndex && (str[i] === "0" || str[i] === ".")) {
      i--;
    }

    trimmed += str.substring(decimalIndex + 1, i + 1);
    return trimmed;
  }

  return str;
};

export const scrollIntoViewWithOffset = (selector: any, offset: number) => {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};
