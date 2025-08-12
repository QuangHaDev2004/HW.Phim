"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingComponent } from "@/app/components/LoadingComponent";
import { MovieCard } from "@/app/components/movieCard/MovieCard";
import { NotFound } from "@/app/components/notFound/NotFound";
import { PaginationMovie } from "@/app/components/pagination/PaginationMovie";
import { SearchFilter } from "@/app/components/SearchFilter";
import { TitlePage } from "@/app/components/title/TitlePage";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export const TVShowList = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "";
  const [tvshowList, setTVShowList] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchTVShowList = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/tv-shows?page=${page}&category=${category}&country=${country}`,
      );
      const dataApi = await res.json();
      if (dataApi.status === "success") {
        const totalPage = Math.ceil(
          dataApi.data.params.pagination.totalItems /
            dataApi.data.params.pagination.totalItemsPerPage,
        );

        setTVShowList(dataApi.data.items);
        setTotalPage(totalPage);
        console.log(dataApi);
      }
      setIsLoading(false);
    };

    fetchTVShowList();
  }, [category, country, page]);

  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <SearchFilter />
      </Suspense>
      <TitlePage text="TV Shows" />

      {isLoading ? (
        <LoadingComponent />
      ) : tvshowList.length === 0 ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {tvshowList.map((item) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </div>

          <Suspense fallback={<LoadingComponent />}>
            <PaginationMovie totalPage={totalPage} />
          </Suspense>
        </>
      )}
    </>
  );
};
