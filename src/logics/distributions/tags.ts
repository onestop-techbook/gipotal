import { SAMPLE_DISTRIBUTIONS } from "./sample";

export const createTags = () => {
  return Array.from(new Set(SAMPLE_DISTRIBUTIONS.flatMap((dist) => dist.tags)));
};

export const useTags = () => {
  return createTags();
};
