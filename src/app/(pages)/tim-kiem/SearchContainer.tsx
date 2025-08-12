"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";
import { PaginationMovie } from "@/app/components/pagination/PaginationMovie";
import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { NotFound } from "@/app/components/notFound/NotFound";
import { TitlePage } from "@/app/components/title/TitlePage";

export const SearchContainer = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const page = searchParams.get("page") || "";
  const [movieList, setMovieList] = useState<any[]>([]);
  const [titlePage, setTitlePage] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `${process.env.NEXT_PUBLIC_API_BE}/tim-kiem?keyword=${keyword}&page=${page}`,
    )
      .then((res) => res.json())
      .then((dataApi) => {
        if (dataApi.status == "success") {
          const totalPage = Math.ceil(
            dataApi.data.params.pagination.totalItems /
              dataApi.data.params.pagination.totalItemsPerPage,
          );

          setMovieList(dataApi.data.items);
          setTitlePage(dataApi.data.titlePage);
          setTotalPage(totalPage);
        }
        setIsLoading(false);
      });
  }, [keyword, page]);

  return (
    <>
      {titlePage && <TitlePage text={titlePage} />}

      {isLoading ? (
        <LoadingComponent />
      ) : keyword.trim().length === 0 || movieList.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movieList.map((item) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <PaginationMovie totalPage={totalPage} />
        </>
      )}
    </>
  );
};
