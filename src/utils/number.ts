export const currencyFormatter = (
  amount: string | number,
  separator = "."
): string => {
  const unformattedString = amount.toString();
  const floatValues = parseFloat(unformattedString).toString();
  const split = floatValues.split(separator);
  const decimal = split[1];

  const formattedString = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: decimal ? decimal.length : 0,
  }).format(Number(unformattedString));

  return formattedString;
};

export const numberFormatter = (
  amount: string | number,
  decimalPoint = ","
): string => {
  const unformattedString = amount.toString().split(".").join("");
  const hasDecimalPoint = unformattedString.includes(decimalPoint);
  const stringSplit = unformattedString.split(decimalPoint);

  const amountValue = stringSplit[0];
  let decimalValue = "";
  if (stringSplit[1]) {
    decimalValue = stringSplit[1];
  }

  let formattedString = new Intl.NumberFormat("id-ID").format(
    Number(amountValue)
  );

  if (thousandSeparatedStringToNumber(amountValue) === null) {
    formattedString = "0";
  }

  if (hasDecimalPoint) {
    if (decimalValue) {
      return `${formattedString}${decimalPoint}${decimalValue}`;
    }
    return `${formattedString}${decimalPoint}`;
  }
  return formattedString;
};

export const getNonDecimalNumber = (num: string): string => {
  return num.split(",")[0];
};

export const thousandSeparatedStringToNumber = (
  amount: string
): number | null => {
  const num = parseFloat(amount.split(".").join(""));
  return isNaN(num) ? null : num;
};

export const isNumeric = (value: any): boolean => {
  return /^-?\d+$/.test(value);
};
