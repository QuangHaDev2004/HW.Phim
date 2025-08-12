import { Note } from "@/app/components/note/Note";
import { SingleMoviesList } from "./SingleMoviesList";
import { Metadata } from "next";
import { Suspense } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";

export const metadata: Metadata = {
  title: "Phim lẻ",
  description: "Mô tả trang phim lẻ",
};

export default async function SingleMoviesPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <Suspense fallback={<LoadingComponent />}>
            <SingleMoviesList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
