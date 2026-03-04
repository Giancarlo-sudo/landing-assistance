export const formatCardNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  const chunks = cleaned.match(/.{1,4}/g) || [];
  return chunks.join(" ").substring(0, 19);
};
