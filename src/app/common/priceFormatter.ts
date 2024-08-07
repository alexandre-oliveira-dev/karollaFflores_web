export function formatter(price: string | number) {
  const priceFormat = parseFloat(
    String(price ?? "0")?.replace(",", ".")
  )?.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  });
  return priceFormat;
}
