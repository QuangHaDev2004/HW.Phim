"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Note } from "@/app/components/note/Note";
import { Episodes } from "./Episodes";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { LoadingComponent } from "@/app/components/LoadingComponent";
import { EpisodeHeader } from "./EpisodeHeader";
import { NotFound } from "@/app/components/notFound/NotFound";

export default function MovieDetail() {
  const params = useParams();
  const slug = params.slug;
  const searchParams = useSearchParams();
  const episodeSlug = searchParams.get("episode") || "";

  const [movieDetail, setMovieDetail] = useState<any>(null);
  const [currentEpisode, setCurrentEpisode] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (isFirstLoad) setIsLoading(true); // chỉ bật loading khi lần đầu
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BE}/phim/${slug}`);
      const dataApi = await res.json();
      if (dataApi.status == "success") {
        const itemDetail = dataApi.data.item;
        setMovieDetail(itemDetail);

        if (episodeSlug && itemDetail.episodes[0].server_data) {
          const ep = itemDetail.episodes[0].server_data.find(
            (item: any) => item.slug === episodeSlug,
          );
          setCurrentEpisode(ep || itemDetail.episodes?.[0]?.server_data[0]);
        } else {
          setCurrentEpisode(itemDetail.episodes?.[0]?.server_data[0]);
        }
      }

      if (isFirstLoad) {
        setIsLoading(false);
        setIsFirstLoad(false);
      }
    };

    fetchMovieDetail();
  }, [episodeSlug, isFirstLoad, slug]);

  useEffect(() => {
    if (!episodeSlug) return;
    if (currentEpisode && currentEpisode.slug === episodeSlug) {
      setIsPlaying(true);
    }
  }, [currentEpisode, episodeSlug]);

  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />

          {isLoading ? (
            <LoadingComponent />
          ) : (
            <>
              {currentEpisode?.link_m3u8 ? (
                <div className="relative aspect-video overflow-hidden rounded-[4px] bg-[#07070C]">
                  <ReactPlayer
                    src={currentEpisode.link_m3u8}
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    controls={true}
                  />
                </div>
              ) : (
                <NotFound />
              )}

              <EpisodeHeader
                movieDetail={movieDetail}
                episodeSlug={episodeSlug}
              />

              <Episodes
                movieDetail={movieDetail}
                currentEpisode={currentEpisode}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
