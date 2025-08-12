"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageComponent } from "@/app/components/ImageComponent";
import { useModalContext } from "@/context/ModalProvider";
import { useRouter } from "next/navigation";
import { FaCirclePlay, FaStar } from "react-icons/fa6";

type Props = {
  movieDetail: any;
};

export const MovieInfo = ({ movieDetail }: Props) => {
  const route = useRouter();
  const { openPopup } = useModalContext();

  const handleWatchMovie = () => {
    route.push(`/xem-phim/${movieDetail.slug}`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-[24px]">
        <div className="relative aspect-[384/488] w-full overflow-hidden rounded-[4px] lg:flex-1">
          <ImageComponent
            src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${movieDetail.thumb_url}`}
            alt={movieDetail.name}
            className="object-cover transition-all duration-300"
          />
          {movieDetail.episodes[0].server_data[0].name !== "" && (
            <div className="absolute right-0 bottom-[10px] left-0 px-[20px]">
              <button
                onClick={handleWatchMovie}
                className="bg-gradient-1 text-primary flex h-[42px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-[4px] text-[14px] font-[500]"
              >
                <FaCirclePlay className="text-[16px]" />
                Xem phim
              </button>
            </div>
          )}
        </div>
        <div className="text-primary lg:w-2/3">
          <h1 className="mb-[8px] text-[24px] font-bold">{movieDetail.name}</h1>
          <p className="text-one mb-[30px] text-[16px] font-[600]">
            {movieDetail.origin_name}
          </p>
          <div className="mb-[30px] grid grid-cols-2 gap-[20px] text-[14px] lg:grid-cols-3">
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Năm:</span>
              {movieDetail.year}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Thời lượng:</span>
              {movieDetail.time}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Đang phát:</span>
              {movieDetail.episode_current}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Tập mới nhất:</span>
              {movieDetail.episode_total}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Quốc gia:</span>
              {movieDetail.country[0]?.name || "Không xác định"}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Chất lượng:</span>
              {movieDetail.quality} + {movieDetail.lang}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Thể loại:</span>
              {(movieDetail.category || [])
                .map((item: any) => item.name)
                .join(", ") || "Không xác định"}
            </div>
            <div className="font-[500]">
              <span className="text-secondary mr-[6px]">Đạo diễn:</span>
              {movieDetail?.director[0] || "Không xác định"}
            </div>
          </div>
          <div className="mb-[16px]">
            <p className="mb-[8px] text-[16px] font-bold">Diễn viên</p>
            <p className="text-secondary text-[14px]">
              {(movieDetail.actor || []).join(", ") || "Không xác định"}
            </p>
          </div>
          <div className="mb-[20px] flex items-center gap-[8px] sm:mb-[30px]">
            <FaStar className="text-yellow text-[20px]" />
            <span className="text-[20px] font-bold">
              {Math.round(movieDetail.tmdb.vote_average * 10)} / 100
            </span>
            <span className="text-secondary">
              ({movieDetail.tmdb.vote_count} lượt)
            </span>
          </div>
          {movieDetail.trailer_url?.trim() && (
            <button
              className="bg-gradient-2 text-primary flex cursor-pointer items-center gap-[10px] rounded-[20px] px-[16px] py-[8px] transition-all duration-300 hover:scale-105"
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${movieDetail.trailer_url.split("v=")[1]}`}
                    className="aspect-video w-[90vw] md:w-[80vw] xl:w-[60vw]"
                  />,
                );
              }}
            >
              <FaCirclePlay />
              Trailer
            </button>
          )}
        </div>
      </div>
    </>
  );
};
