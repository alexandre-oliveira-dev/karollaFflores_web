export function formatter(price: string | number | undefined) {
  if (!price) return null;
  const priceFormat = parseFloat(
    String(price ?? "0")?.replace(",", ".")
  )?.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  });
  return priceFormat;
}
