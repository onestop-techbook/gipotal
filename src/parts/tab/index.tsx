import { VFC } from "react";
import { Button } from "@/parts/button";

type Props = {
  /** 表示するタブの名前を配列で */
  tabs: string[];
  /** 現在選択中のタブをインデックスで */
  value: number | undefined;
  /** 選択されたタブをインデックスで渡すハンドラー */
  onChange: (index: number) => void;
};

/** いわゆるタブ。ボタンでタブを選択できる */
export const Tab: VFC<Props> = ({ tabs, value, onChange }) => {
  return (
    <div className="flex gap-4 items-center">
      {tabs.map((tab, i) => {
        if (i === value) {
          return (
            <Button type="tab" onClick={() => onChange(i)}>
              {tab}
            </Button>
          );
        } else {
          return (
            <Button
              type="none"
              className="px-6 text-sm font-button cursor-pointer"
              onClick={() => onChange(i)}
            >
              {tab}
            </Button>
          );
        }
      })}
    </div>
  );
};
