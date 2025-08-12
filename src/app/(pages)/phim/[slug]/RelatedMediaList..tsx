/* eslint-disable @typescript-eslint/no-explicit-any */

import { MovieCard } from "@/app/components/movieCard/MovieCard";

type Props = {
  mediaRelated: any[];
};

export const RelatedMediaList = (props: Props) => {
  const { mediaRelated } = props;

  return (
    <>
      <p className="text-gradient-one mb-[20px] inline-block text-[20px] font-[900]">
        Có thể bạn sẽ thích
      </p>
      <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {mediaRelated.map((item) => (
          <MovieCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};
