"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass, FaStar } from "react-icons/fa6";

type Props = {
  isShowSearch: boolean;
  setIsShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

type Suggestion = {
  _id: string;
  thumb_url: string;
  name: string;
  origin_name: string;
  tmdb: {
    vote_average: string;
  };
};

let debounceTimer: ReturnType<typeof setTimeout> | null;

export const SearchForm = ({ isShowSearch, setIsShowSearch }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || ""; //gán giá trị mặc định cho ô input
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const fetchSuggestion = async (value: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BE}/tim-kiem?keyword=${encodeURIComponent(value)}`,
    );
    const dataApi = await res.json();
    if (dataApi.status === "success") {
      setSuggestions(dataApi.data.items);
    }
  };

  const handleChange = (event: any) => {
    const newValue = event.target.value.trim();
    if (newValue === "") {
      setSuggestions([]);
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      fetchSuggestion(newValue);
    }, 200);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    const query = `?keyword=${encodeURIComponent(keyword)}`;

    router.push(`/tim-kiem${query}`);
    setIsShowSearch(false);
    setSuggestions([]);
  };

  return (
    <>
      <div
        className={`${isShowSearch ? "bg-dark-four fixed top-0 left-1/2 z-[999] w-full -translate-x-1/2 p-[48px]" : "hidden"} sm:flex`}
      >
        <form
          action=""
          className="bg-dark-three relative items-center rounded-[4px]"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            name="keyword"
            className="rounded-[4px] py-[8px] pr-[120px] pl-[16px] text-[14px]"
            placeholder="Tìm kiếm"
            autoComplete="off"
            defaultValue={keyword}
          />
          <button className="border-primary absolute top-[50%] right-0 -translate-y-1/2 cursor-pointer border-l px-[16px] py-[8px]">
            <FaMagnifyingGlass className="text-primary size-[16px]" />
          </button>

          {/* Suggestion */}
          {suggestions.length > 0 && (
            <div className="suggest bg-dark-three absolute top-[130%] left-0 hidden max-h-[500px] w-full overflow-y-auto rounded-[4px] sm:block">
              {suggestions.map((item) => (
                <div
                  key={item._id}
                  className="hover:bg-dark-four flex items-center gap-[16px] p-[10px] transition-all duration-300 ease-in-out"
                >
                  <img
                    className="h-[96px] w-[64px] object-cover"
                    src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${item.thumb_url}`}
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <div className="text-primary line-clamp-1 text-[14px] font-[700]">
                      {item.name}
                    </div>
                    <div className="text-secondary mb-[10px] line-clamp-1 text-[13px] font-[500]">
                      {item.origin_name}
                    </div>
                    <div className="flex items-center gap-[10px] text-[14px]">
                      <FaStar className="text-yellow text-[14px]" />
                      {item.tmdb.vote_average}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsShowSearch(false)}
        className={`${isShowSearch ? "fixed inset-0 z-[998] block bg-[#000000c2]" : "hidden"}`}
      ></div>
    </>
  );
};
