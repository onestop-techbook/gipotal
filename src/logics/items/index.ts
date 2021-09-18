/** 登録した同人誌 */
export type Item = {
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
  /**  */
  path: string;
  /** ページ数 */
  numberOfPages: number;
  /** 価格 */
  price: number;
  /** タグ */
  tags: string[];
};
