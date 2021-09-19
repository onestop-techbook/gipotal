import Link from "next/link";
import { Distribution } from "@/logics/distributions";
import { DistributionImage } from "./image";
import { formatDate } from "@/logics/utils";

type Props = Distribution & {
  /** 仮のID。実際には uuid にする */
  id: number;
};

/** 頒布物をコンパクトにまとめて表示する */
export const DistributionCell: React.FC<Props> = ({
  category,
  imagePath,
  title,
  eventName,
  publishedAt,
  id,
}) => {
  const date = formatDate(publishedAt);
  const published = eventName ? `${eventName} (${date})` : date;
  return (
    <div className="w-[300px]">
      <Link href={`/books/${id}`}>
        <a>
          <DistributionImage imagePath={imagePath} />
          <div className="text-sm leading-4 opacity-80 mt-2">{category}</div>
          <div className="font-bold text-lg leading-[21px] mt-[2px]">
            {title}
          </div>
          <div className="text-sm leading-4 opacity-60 mt-1">{published}</div>
        </a>
      </Link>
    </div>
  );
};
