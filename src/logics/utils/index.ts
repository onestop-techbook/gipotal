/** 日付を整形する */
export const formatDate = (date: Date) => {
  return date.toLocaleDateString().replace(/\//g, ".");
};

/** 価格を整形する */
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    currency: "JPY",
  }).format(price);
};
