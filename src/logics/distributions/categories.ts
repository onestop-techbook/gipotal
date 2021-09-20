import { SAMPLE_DISTRIBUTIONS } from "./sample";

export const createCategories = () => {
  return Array.from(new Set(SAMPLE_DISTRIBUTIONS.map((dist) => dist.category)));
};

export const useCategories = () => {
  return createCategories();
};
