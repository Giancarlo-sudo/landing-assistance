export const formatExpiryDate = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length >= 2) {
    return (
      cleaned.substring(0, 2) +
      (cleaned.length > 2 ? "/" + cleaned.substring(2, 4) : "")
    );
  }
  return cleaned;
};
