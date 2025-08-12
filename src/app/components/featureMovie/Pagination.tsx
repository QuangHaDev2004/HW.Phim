"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

type Props = {
  movies: any;
  activeMovieId: any;
  setActiveMovieId: React.Dispatch<React.SetStateAction<undefined>>;
};

export const Pagination = (props: Props) => {
  const { movies, activeMovieId, setActiveMovieId } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = movies.findIndex(
        (item: any) => item._id === activeMovieId,
      );
      const nextIndex = (currentIndex + 1) % movies.length;
      setActiveMovieId(movies[nextIndex]._id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeMovieId, movies, setActiveMovieId]);

  return (
    <>
      <ul className="hidden absolute bottom-[8%] left-[50%] lg:flex -translate-x-1/2 items-center gap-[16px]">
        {movies.map((item: any) => (
          <li
            onClick={() => setActiveMovieId(item._id)}
            key={item._id}
            className={`h-[8px] w-[48px] cursor-pointer ${item._id === activeMovieId ? "bg-primary" : "bg-secondary"}`}
          ></li>
        ))}
      </ul>
    </>
  );
};
