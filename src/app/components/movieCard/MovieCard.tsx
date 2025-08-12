/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { ImageComponent } from "../ImageComponent";
import { CircularProgessBar } from "./CircularProgessBar";

type Props = {
  item: any;
};

export const MovieCard = ({ item }: Props) => {
  const point = item?.tmdb?.vote_average;

  return (
    <>
      <Link
        href={`/phim/${item.slug}`}
        className="bg-dark-three relative overflow-hidden rounded-[4px]"
      >
        <div className="bg-gradient-1 text-primary absolute top-[10px] right-[10px] z-2 rounded-tl-[8px] rounded-br-[8px] px-[8px] py-[4px] text-[12px] font-[500]">
          {item.episode_current}
        </div>
        <div className="relative aspect-[246/369] overflow-hidden">
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${item.thumb_url}`}
            alt={item.origin_name}
            className="object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
        <div className="relative px-[10px] py-[10px] text-center lg:px-[20px]">
          <CircularProgessBar
            percent={Math.round(point * 10)}
            strokeColor={
              point >= 7 ? "#4ADE80" : point >= 5 ? "#FACC15" : "#ED3500"
            }
          />
          <p className="text-red line-clamp-1 text-[16px] font-bold">
            {item.origin_name}
          </p>
          <p className="text-secondary line-clamp-1 text-[14px]">{item.name}</p>
        </div>
      </Link>
    </>
  );
};
