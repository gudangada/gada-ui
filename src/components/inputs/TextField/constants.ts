export const TextFieldRegExp = {
  noSpecialChars: {
    regExp: "[^\\w\\s]",
    params: ["gi"],
  },
  allowCommaOnly: {
    regExp: "[^\\w\\s,]",
    params: ["gi"],
  },
};
