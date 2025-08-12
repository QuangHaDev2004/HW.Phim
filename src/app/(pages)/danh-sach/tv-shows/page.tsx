import { Note } from "@/app/components/note/Note"
import { Metadata } from "next"
import { TVShowList } from "./TVShowList"

export const metadata: Metadata = {
  title: "TV Show",
  description: "Mô tả trang TV Show"
}

export default function TVShowPage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <TVShowList />
        </div>
      </div>
    </>
  )
}
