import { FeatureMovie } from "@/app/components/featureMovie/FeatureMovie";
import { MediaList } from "@/app/components/mediaList/MediaList";
import { Note } from "@/app/components/note/Note";
import { Trending_Tabs, Upcoming_Tabs } from "@/libs/contants";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="bg-dark-two pt-[90px] pb-[40px] lg:pt-[70px]">
          <Note />
          <FeatureMovie />
          <MediaList text="Top thịnh hành" Tabs={Trending_Tabs} />
          <MediaList text="Phim sắp chiếu" Tabs={Upcoming_Tabs} />
        </div>
      </div>
    </>
  );
}
