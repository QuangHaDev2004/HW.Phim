/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { LoadingComponent } from "@/app/components/LoadingComponent";
import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { NotFound } from "@/app/components/notFound/NotFound";
import { PaginationMovie } from "@/app/components/pagination/PaginationMovie";
import { SearchFilter } from "@/app/components/SearchFilter";
import { TitlePage } from "@/app/components/title/TitlePage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SingleMoviesList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "";
  const page = searchParams.get("page") || "";
  const [singleMoviesList, setSingleMoviesList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPage, setTotalPage] = useState<number>();

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-le?page=${page}&category=${category}&country=${country}`,
    )
      .then((res) => res.json())
      .then((dataApi) => {
        if (dataApi.status === "success") {
          const totalPage = Math.ceil(
            dataApi.data.params.pagination.totalItems /
              dataApi.data.params.pagination.totalItemsPerPage,
          );

          setSingleMoviesList(dataApi.data.items);
          setTotalPage(totalPage);
        }
        setIsLoading(false);
      });
  }, [category, country, page]);

  return (
    <>
      <SearchFilter />
      <TitlePage text="Phim lẻ" />

      {isLoading ? (
        <LoadingComponent />
      ) : singleMoviesList.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {singleMoviesList.map((item: any) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </div>

          <PaginationMovie totalPage={totalPage} />
        </>
      )}
    </>
  );
};
