import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const MovieCardSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-dark-three relative overflow-hidden rounded-[4px]"
            >
              <div className="absolute top-[10px] right-[10px] z-2">
                <Skeleton
                  baseColor="var(--color-dark-one)"
                  highlightColor="var(--color-dark-two)"
                  width={70}
                  className="rounded-tl-[8px] rounded-br-[8px] px-[8px] py-[4px] text-[12px] font-[500] text-white"
                />
              </div>
              <div className="aspect-[246/369] overflow-hidden">
                <Skeleton
                  width="100%"
                  height="100%"
                  baseColor="var(--color-dark-one)"
                  highlightColor="var(--color-dark-two)"
                  className="object-cover"
                />
              </div>
              <div className="relative px-[10px] py-[10px] text-center lg:px-[20px]">
                <div className="absolute -top-[100%] left-[10px]">
                  <Skeleton
                    baseColor="var(--color-dark-one)"
                    highlightColor="var(--color-dark-two)"
                    circle
                    width={50}
                    height={50}
                  />
                </div>

                <Skeleton
                  baseColor="var(--color-dark-one)"
                  highlightColor="var(--color-dark-two)"
                  className="line-clamp-1 text-[16px] font-bold text-[#B0E633]"
                />
                <Skeleton
                  baseColor="var(--color-dark-one)"
                  highlightColor="var(--color-dark-two)"
                  className="line-clamp-1 text-[14px] text-white"
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
