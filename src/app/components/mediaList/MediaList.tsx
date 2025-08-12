/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { useTabContext } from "@/context/TabProvider";
import { MovieCardSkeleton } from "../movieCard/MovieCardSkeleton";
import { MovieCard } from "../movieCard/MovieCard";

export type Tab = {
  id: string;
  name?: string;
  url: string;
};

type Props = {
  text: string;
  Tabs: Tab[];
};

export const MediaList = ({ text, Tabs }: Props) => {
  const isTrending = text === "Top thịnh hành";
  const tabContext = useTabContext();

  // const [activeTabId, setActiveTabId] = useState(Tabs[0]?.id);
  const [localTabId, setLocalTabId] = useState(Tabs[0]?.id);
  const activeTabId = isTrending ? tabContext.activeTabId : localTabId;
  const setActiveTabId = isTrending ? tabContext.setActiveTabId : setLocalTabId;
  const [mediaList, setMediaList] = useState<any[] | null>(null);

  useEffect(() => {
    const url = Tabs.find((item) => item.id === activeTabId)?.url;
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((dataApi) => {
          if (dataApi.status === "success") {
            const trendingMediaList = dataApi.data.items.slice(0, 10);
            setMediaList(trendingMediaList);
          }
        });
    }
  }, [Tabs, activeTabId]);

  return (
    <>
      <div className="pt-[30px] sm:pt-[48px]">
        {/* Filter */}
        <Filter
          Tabs={Tabs}
          text={text}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />

        {/* Movie List */}
        {mediaList ? (
          <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {mediaList.map((item: any) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <MovieCardSkeleton />
        )}
      </div>
    </>
  );
};
