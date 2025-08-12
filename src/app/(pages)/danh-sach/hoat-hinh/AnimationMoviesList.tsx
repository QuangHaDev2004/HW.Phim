"use client";
import { LoadingComponent } from "@/app/components/LoadingComponent";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { NotFound } from "@/app/components/notFound/NotFound";
import { PaginationMovie } from "@/app/components/pagination/PaginationMovie";
import { SearchFilter } from "@/app/components/SearchFilter";
import { TitlePage } from "@/app/components/title/TitlePage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const AnimationMoviesList = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "";
  const [animationList, setAnimationList] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchAnimationList = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/hoat-hinh?page=${page}&category=${category}&country=${country}`,
      );
      const dataApi = await res.json();
      if (dataApi.status === "success") {
        const totalPage = Math.ceil(
          dataApi.data.params.pagination.totalItems /
            dataApi.data.params.pagination.totalItemsPerPage,
        );

        setAnimationList(dataApi.data.items);
        setTotalPage(totalPage);
      }
      setIsLoading(false);
    };

    fetchAnimationList();
  }, [category, country, page]);

  return (
    <>
      <SearchFilter />
      <TitlePage text="Phim hoạt hình" />

      {isLoading ? (
        <LoadingComponent />
      ) : animationList.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {animationList.map((item) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </div>

          <PaginationMovie totalPage={totalPage} />
        </>
      )}
    </>
  );
};
