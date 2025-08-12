import { Note } from "@/app/components/note/Note";
import { Metadata } from "next";
import { AnimationMoviesList } from "./AnimationMoviesList";
import { Suspense } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";

export const metadata: Metadata = {
  title: "Phim hoạt hình",
  description: "Mô tả trang Phim hoạt hình",
};

export default function AnimationPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <Suspense fallback={<LoadingComponent />}>
            <AnimationMoviesList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
