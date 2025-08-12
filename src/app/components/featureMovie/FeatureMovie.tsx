"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { MovieItem } from "./MovieItem";
import { Pagination } from "./Pagination";
import { LoadingComponent } from "../LoadingComponent";
export const FeatureMovie = () => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-sap-chieu`)
      .then((res) => res.json())
      .then((dataApi) => {
        const popularMovies = dataApi.data.items.slice(0, 4);
        setMovieList(popularMovies);
        setActiveMovieId(popularMovies[1]._id);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="relative overflow-hidden rounded-[4px]">
          {movieList
            .filter((item) => item._id === activeMovieId)
            .map((item) => (
              <MovieItem key={item._id} data={item} />
            ))}
          <Pagination
            movies={movieList}
            activeMovieId={activeMovieId}
            setActiveMovieId={setActiveMovieId}
          />
        </div>
      )}
    </>
  );
};
