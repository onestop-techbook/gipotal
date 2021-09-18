import Link from "next/link";
import { Item } from "@/types";

type Props = Item;

export const ItemCell: React.FC<Props> = ({
  category,
  imagePath,
  title,
  eventName,
  publishedAt,
  path,
}) => {
  const date = publishedAt.toLocaleDateString().replace(/\//g, ".");
  const published = eventName ? `${eventName} (${date})` : date;
  return (
    <div>
      <Link href={path}>
        <a>
          <div className="w-[300px] h-[428px] bg-[#c4c4c4]">
            <img className="w-full h-auto" src={imagePath} />
          </div>
          <div className="text-sm leading-4 opacity-80 mt-2">{category}</div>
          <div className="text-bold text-lg leading-[21px] mt-[2px]">
            {title}
          </div>
          <div className="text-sm leading-4 opacity-60 mt-1">{published}</div>
        </a>
      </Link>
    </div>
  );
};
