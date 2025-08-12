"use client";
import { ImageComponent } from "@/app/components/ImageComponent";
import { useState } from "react";

type actorItemType = {
  profile_path: string;
  name: string;
  character: string;
  tmdb_people_id: string;
};

type Props = {
  actorList: actorItemType[];
};

export const ActorList = ({ actorList }: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActors = isShowMore
    ? actorList?.slice(0, 32)
    : actorList?.slice(0, 5);

  return (
    <>
      {currentActors && (
        <div className="mb-[30px]">
          <p className="text-gradient-one mb-[20px] inline-block text-[20px] font-[900]">
            Diễn viên
          </p>
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentActors.map((item: actorItemType) => (
              <div
                key={item.tmdb_people_id}
                className="overflow-hidden rounded-[4px] bg-dark-three"
              >
                <div className="relative aspect-[185/278] overflow-hidden">
                  {item.profile_path ? (
                    <ImageComponent
                      src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE_ACTOR}/${item.profile_path}`}
                      alt={item.name}
                      className="object-cover transition-all duration-300 hover:scale-105"
                    />
                  ) : (
                    <ImageComponent
                      src="/assets/images/actor_no_image.svg"
                      alt={item.name}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="px-[10px] py-[10px] text-center lg:px-[20px]">
                  <p className="line-clamp-1 text-[12px] font-bold text-red sm:text-[16px]">
                    {item.name}
                  </p>
                  {item.character && (
                    <p className="line-clamp-1 text-[12px] text-primary sm:text-[14px]">
                      Vai diễn: {item.character || "Không rõ"}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="bg-gradient-1 mt-[20px] cursor-pointer rounded-[4px] px-[14px] py-[4px] text-[14px] text-white transition-all duration-300 hover:scale-105"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Thu gọn" : "Mở rộng"}
          </button>
        </div>
      )}
    </>
  );
};
