export const validateRUC = (ruc: string): boolean => {
  if (!/^\d{11}$/.test(ruc)) return false;

  // El RUC debe empezar con 10, 20
  const validPrefixes = ["10", "20"];
  const prefix = ruc.substring(0, 2);
  if (!validPrefixes.includes(prefix)) return false;

  // Validar dígito verificador
  const factors = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const sum = factors.reduce(
    (acc, factor, i) => acc + factor * Number(ruc[i]),
    0,
  );
  const remainder = 11 - (sum % 11);
  const checkDigit = remainder === 10 ? 0 : remainder === 11 ? 1 : remainder;

  return checkDigit === Number(ruc[10]);
};
