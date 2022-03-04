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

export const numberFormatter = (amount: string | number): string => {
  const unformattedString = amount.toString();

  let formattedString = new Intl.NumberFormat("id-ID").format(
    Number(unformattedString)
  );

  if (isNaN(thousandSeparatedStringToNumber(formattedString))) {
    formattedString = "0";
  }
  return formattedString;
};

export const thousandSeparatedStringToNumber = (amount: string): number => {
  return parseFloat(amount.split(".").join(""));
};

export const isNumeric = (value: any): boolean => {
  return /^-?\d+$/.test(value);
};
