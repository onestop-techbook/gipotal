import { FetchedData } from "@/logics";
import { SAMPLE_DISTRIBUTIONS } from "./sample";

/** 頒布物 */
export type Distribution = {
  /** ID */
  id: string;
  /** カテゴリ（ソフトスキルなど）*/
  category: string;
  /** 画像の存在する場所（S3など) */
  imagePath: string;
  /** 本のタイトル */
  title: string;
  /** 初めて頒布した同人イベント */
  eventName?: string;
  /** 頒布開始日 */
  publishedAt: Date;
  /** ページ数 */
  numberOfPages: number;
  /** 価格 */
  price: number;
  /** タグ */
  tags: string[];
  /** 本の説明 */
  content: string;
};

// TODO 何種類かの頒布物取得が必要になる
/** 頒布物情報を取得する */
export const useFetchDistributionById = (
  id: number
): FetchedData<Distribution> => {
  const data = SAMPLE_DISTRIBUTIONS;
  const loading = Number.isNaN(id);
  return {
    loading,
    error: !!data[id] || loading ? null : { code: 404, message: "Not Found" },
    data: data[id],
  };
};

export const useFetchDistributions = (): FetchedData<Distribution[]> => {
  return {
    loading: false,
    error: null,
    data: SAMPLE_DISTRIBUTIONS,
  };
};

export const useDistributionsByCategories = (
  category: string | undefined
): FetchedData<Distribution[]> => {
  if (!category) {
    return {
      loading: false,
      error: null,
      data: SAMPLE_DISTRIBUTIONS,
    };
  } else {
    return {
      loading: false,
      error: null,
      data: SAMPLE_DISTRIBUTIONS.filter((dist) => dist.category === category),
    };
  }
};

export const useDistributionsByTags = (
  tag: string | undefined
): FetchedData<Distribution[]> => {
  if (!tag) {
    return {
      loading: false,
      error: null,
      data: SAMPLE_DISTRIBUTIONS,
    };
  } else {
    return {
      loading: false,
      error: null,
      data: SAMPLE_DISTRIBUTIONS.filter((dist) => dist.tags.includes(tag)),
    };
  }
};
