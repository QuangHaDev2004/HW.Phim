import { Note } from "@/app/components/note/Note";
import { SearchContainer } from "./SearchContainer";
import { Metadata } from "next";
import { Suspense } from "react";
import { LoadingComponent } from "@/app/components/LoadingComponent";

export const metadata: Metadata = {
  title: "Tìm kiếm",
  description: "Mô tả trang tìm kiếm",
};

export default async function SearchPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />

          {/* Search Container */}
          <Suspense fallback={<LoadingComponent />}>
            <SearchContainer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
