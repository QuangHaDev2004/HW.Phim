import { Note } from "@/app/components/note/Note";
import { SeriesMoviesList } from "./SeriesMoviesList";
import { Metadata } from "next";
import { Suspense } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";

export const metadata: Metadata = {
  title: "Phim bộ",
  description: "Mô tả trang phim bộ",
};

export default async function SeriesMoviesPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <Suspense fallback={<LoadingComponent />}>
            <SeriesMoviesList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
