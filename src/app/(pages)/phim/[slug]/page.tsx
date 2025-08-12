import { Note } from "@/app/components/note/Note";
import { MovieDescription } from "./MovieDescription";
import { MovieInfo } from "./MovieInfo";
import { RelatedMediaList } from "./RelatedMediaList.";
import { BreadCumb } from "./BreadCumb";
import { ActorList } from "./ActorList";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Chi tiết phim",
  description: "Mô tả trang chi tiết phim"
}

export default async function MovieDetail({ params }: Props) {
  const { slug } = await params;

  // Get movie detail
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BE}/phim/${slug}`);
  const dataApi = await res.json();

  let movieDetail = null;
  let breadCumbData = null;
  if (dataApi.status == "success") {
    movieDetail = dataApi.data.item;
    breadCumbData = dataApi.data.breadCrumb;
  }

  // Get related movie
  const categorySlug = movieDetail?.category[0]?.slug;
  const resMovieRelated = await fetch(
    `${process.env.NEXT_PUBLIC_API_BE}/the-loai/${categorySlug}`,
  );
  const dataApiMovieRelated = await resMovieRelated.json();

  let relatedMovie = null;
  if (dataApiMovieRelated.status == "success") {
    relatedMovie = dataApiMovieRelated.data.items.slice(0, 10);
  }

  // Get Actor List
  const resActorList = await fetch(
    `${process.env.NEXT_PUBLIC_API_BE}/phim/${slug}/peoples`,
  );
  const dataApiActorList = await resActorList.json();
  let actorList = null;
  if (dataApiActorList.message == "success") {
    actorList = dataApiActorList.data.peoples;
  }

  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />

          {/* BreadCumb */}
          <BreadCumb breadCumbData={breadCumbData} />

          {/* Movie Info */}
          <MovieInfo movieDetail={movieDetail} />

          {/* Notification */}
          {movieDetail.episodes[0].server_data[0].name === "" && (
            <div className="bg-dark-three text-yellow mt-[20px] rounded-[4px] p-[16px] text-[14px] font-[600] sm:p-[20px]">
              Rất tiếc, phim này hiện chưa có link xem. Mong bạn thông cảm!.
            </div>
          )}

          {/* Movie Description */}
          <MovieDescription movieDetail={movieDetail} />

          {/* Actor List */}
          <ActorList actorList={actorList} />

          {/* Related Media List */}
          <RelatedMediaList mediaRelated={relatedMovie} />
        </div>
      </div>
    </>
  );
}
