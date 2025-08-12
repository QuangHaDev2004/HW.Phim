"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useModalContext } from "@/context/ModalProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCalendar,
  FaCircleInfo,
  FaLanguage,
  FaPlay,
  FaRegClock,
  FaVideo,
} from "react-icons/fa6";

export const MovieItem = (props: { data: any }) => {
  const { data } = props;
  const [trailerCode, setTrailerCode] = useState();
  const { openPopup } = useModalContext();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BE}/phim/${data.slug}`)
      .then((res) => res.json())
      .then((dataApi) => {
        const trailerLink = dataApi.data.item.trailer_url.split("v=")[1];
        setTrailerCode(trailerLink);
      });
  }, [data.slug]);

  return (
    <>
      {data && (
        <>
          <div className="relative aspect-video w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${data.thumb_url}`}
              alt={data.origin_name}
              className="object-cover brightness-50"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="text-three absolute top-[50%] left-[20px] w-[90%] -translate-y-1/2 md:left-[120px] md:w-1/2">
            <div className="text-red line-clamp-1 text-[24px] font-[900] md:text-[32px]">
              {data.origin_name}
            </div>
            <div className="text-primary mb-[20px] line-clamp-1 text-[14px] font-[700] md:text-[20px]">
              {data.name}
            </div>
            <div className="mb-[20px] hidden items-center gap-[32px] md:flex">
              <div className="border-secondary text-secondary rounded-[20px] border px-[18px] py-[4px] font-[600] capitalize">
                {data.type}
              </div>
              <div className="text-secondary flex items-center gap-[6px] font-[600]">
                <FaCalendar />
                {data.year}
              </div>
              <div className="text-secondary flex items-center gap-[6px] font-[600]">
                <FaRegClock />
                {data.time}
              </div>
            </div>
            <div className="text-secondary mb-[10px] hidden items-center gap-[6px] font-[600] md:flex">
              <FaLanguage className="size-[20px]" />
              Ngôn ngữ: {data.lang}
            </div>
            <div className="text-secondary mb-[20px] hidden items-center gap-[6px] font-[600] md:flex lg:mb-[36px]">
              <FaVideo className="size-[20px]" />
              Chất lượng: {data.quality}
            </div>
            <div className="flex items-center gap-[16px]">
              {trailerCode && (
                <button
                  className="bg-red text-primary flex transform cursor-pointer items-center gap-[4px] rounded-[4px] px-[16px] py-[8px] text-[12px] font-[600] transition-all duration-200 hover:scale-105 sm:gap-[10px] sm:text-[14px]"
                  onClick={() => {
                    openPopup(
                      <iframe
                        title="Trailer"
                        src={`https://www.youtube.com/embed/${trailerCode}`}
                        className="aspect-video w-[60vw]"
                      />,
                    );
                  }}
                >
                  <FaPlay />
                  Trailer
                </button>
              )}
              <Link
                href={`/phim/${data.slug}`}
                className="bg-dark-three text-primary flex transform cursor-pointer items-center gap-[4px] rounded-[4px] px-[16px] py-[8px] text-[12px] font-[600] transition-all duration-200 hover:scale-105 sm:gap-[10px] sm:text-[14px]"
              >
                <FaCircleInfo />
                Thông tin
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
