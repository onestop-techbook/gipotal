export const useGetCircleById = (id: number) => {
  return {
    loading: false,
    error: null,
    data: {
      circles: [
        {
          name: "親方Project",
          description:
            "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。",
          circleItems: [
            {
              category: "カテゴリ",
              imagePath: "URL",
              title: "タイトル",
              eventName: "イベント名",
              publishedAt: new Date(),
              path: "path",
            },
          ],
        },
      ],
    },
  };
};
