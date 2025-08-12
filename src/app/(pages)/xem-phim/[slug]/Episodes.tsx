"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { FaList } from "react-icons/fa6";

type Props = {
  movieDetail: any;
  currentEpisode: any;
};

export const Episodes = ({ movieDetail, currentEpisode }: Props) => {
  const route = useRouter();

  const handleEpisodeClick = (episodeSlug: string) => {
    route.push(`/xem-phim/${movieDetail.slug}?episode=${episodeSlug}`);
  };

  return (
    <>
      {movieDetail && (
        <div className="mt-[30px]">
          <div className="bg-dark-three text-yellow inline-flex items-center gap-[10px] rounded-tl-[4px] rounded-tr-[4px] px-[16px] py-[8px] text-[14px] font-bold uppercase">
            <FaList className="text-[16px]" />
            {movieDetail.episodes[0].server_name}
          </div>
          <div className="list-episodes bg-dark-three grid max-h-[316px] grid-cols-4 gap-[12px] overflow-y-auto rounded-tr-[4px] rounded-br-[4px] rounded-bl-[6px] p-[16px] sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
            {movieDetail.episodes[0].server_data.map((item: any) => (
              <div
                onClick={() => handleEpisodeClick(item.slug)}
                key={item.name}
                className={`text-primary h-[36px] w-full cursor-pointer rounded-[4px] px-[10px] text-center text-[14px] leading-[36px] font-[600] transition-all duration-300 ${currentEpisode?.slug === item.slug ? "bg-yellow" : "hover:bg-yellow bg-dark-four"} `}
              >
                {movieDetail.type == "series"
                  ? item.name.match(/\d+/)?.[0]
                  : item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
