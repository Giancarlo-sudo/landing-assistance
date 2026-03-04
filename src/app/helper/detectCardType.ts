export const detectCardType = (cardNumber: string): string => {
  const number = cardNumber.replace(/\s/g, "");

  if (/^4/.test(number)) return "visa";

  // Mastercard: 51-55 o 2221-2720
  if (/^(5[1-5]|2(2[2-9]|[3-6]|7[0-1]|720))/.test(number)) return "master";

  if (/^3[47]/.test(number)) return "amex";

  return "visa";
};
