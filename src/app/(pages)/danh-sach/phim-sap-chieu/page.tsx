import { Note } from "@/app/components/note/Note";
import { Metadata } from "next";
import { UpComingMoviesList } from "./UpcomingMoviesList";
import { Suspense } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";

export const metadata: Metadata = {
  title: "Phim sắp chiếu",
  description: "Mô tả trang Phim sắp chiếu",
};

export default function UpcomingPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <Suspense fallback={<LoadingComponent />}>
            <UpComingMoviesList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
