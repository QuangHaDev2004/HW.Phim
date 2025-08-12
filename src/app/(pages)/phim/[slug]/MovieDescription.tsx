"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

type Props = {
  movieDetail: any;
};

export const MovieDescription = ({ movieDetail }: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <div className="mt-[20px] mb-[40px] rounded-[4px] bg-dark-three p-[16px] sm:p-[20px]">
        <div className="text-gradient-one mb-[16px] inline-block text-[20px] font-[900]">
          Nội Dung Phim
        </div>
        <div
          className={`text-justify text-[14px] leading-[28px] text-primary ${isShowMore ? "" : "line-clamp-2"}`}
          dangerouslySetInnerHTML={{
            __html: movieDetail.content || "Không có thông tin",
          }}
        ></div>
        <button
          className="bg-gradient-1 mt-[20px] cursor-pointer rounded-[4px] px-[14px] py-[4px] text-[14px] text-primary transition-all duration-300 hover:scale-105"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Thu gọn" : "Mở rộng"}
        </button>
      </div>
    </>
  );
};
