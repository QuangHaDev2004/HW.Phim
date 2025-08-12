import { Note } from "@/app/components/note/Note";
import { Metadata } from "next";
import { UpComingMoviesList } from "./UpcomingMoviesList";

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
          <UpComingMoviesList />
        </div>
      </div>
    </>
  );
}
