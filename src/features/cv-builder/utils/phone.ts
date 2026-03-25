export const normalizePhone = (p: string): string => {
  if (!p) return "";

  const digits = p.replace(/\D/g, "");

  if (p.startsWith("+")) return p;
  if (digits.startsWith("0")) return "+62" + digits.slice(1);

  return "+" + digits;
};