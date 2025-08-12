type Props = {
  movieDetail: {
    name: string;
    type: string;
    quality: string;
    lang: string;
  };
  episodeSlug: string;
};

export const EpisodeHeader = ({ movieDetail, episodeSlug }: Props) => {
  return (
    <>
      <div className="bg-dark-three mt-[30px] rounded-[4px] p-[16px]">
        <div className="mb-[10px] text-[18px] font-bold text-yellow">
          {movieDetail?.name}
        </div>
        {movieDetail?.type === "single" ? (
          <div className="text-[14px] font-[600] text-primary">
            Full | {movieDetail?.quality} + {movieDetail?.lang}{" "}
          </div>
        ) : episodeSlug ? (
          <div className="text-[14px] font-[600] text-primary">
            Tập {episodeSlug} | {movieDetail?.quality} + {movieDetail?.lang}
          </div>
        ) : (
          <div className="text-[14px] font-[600] text-primary">
            Tập 1 | {movieDetail?.quality} + {movieDetail?.lang}
          </div>
        )}
      </div>
    </>
  );
};
