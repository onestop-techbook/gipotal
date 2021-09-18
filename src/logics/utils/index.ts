export const formatDate = (date: Date) => {
  return `2018.04.24`;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    currency: "JPY",
  }).format(price);
};
