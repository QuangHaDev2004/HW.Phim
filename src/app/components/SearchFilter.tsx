/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type OptionType = {
  _id: string;
  name: string;
  slug: string;
};

type Category = OptionType;
type Country = OptionType;

export const SearchFilter = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [countryList, setCountryList] = useState<Country[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const country = searchParams.get("country") || "";
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const [resCategory, resCountry] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_BE}/the-loai`),
        fetch(`${process.env.NEXT_PUBLIC_API_BE}/quoc-gia`),
      ]);

      const dataCategory = await resCategory.json();
      const dataCountry = await resCountry.json();

      if (dataCategory?.data?.items) {
        setCategoryList(dataCategory.data.items);
      }
      if (dataCountry?.data?.items) {
        setCountryList(dataCountry.data.items);
      }
    };

    fetchData();
  }, []);

  const handleFilterCategory = (event: any) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams.toString()); // Lấy tất cả cặp key/value hiện tại trên URL

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    route.push(`?${params.toString()}`);
  };

  const handleFilterCountry = (event: any) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("country", value);
    } else {
      params.delete("country");
    }

    route.push(`?${params.toString()}`);
  };

  return (
    <>
      <form className="mb-[20px] grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div>
          <label
            htmlFor="category"
            className="text-primary mb-[6px] block text-[14px] font-bold"
          >
            Thể loại
          </label>
          <select
            onChange={handleFilterCategory}
            defaultValue={category}
            name="category"
            id="category"
            className="text-primary bg-dark-three w-full rounded-[4px] px-[10px] py-[8px] text-[14px] font-[600]"
          >
            <option value="">- Tất cả -</option>
            {categoryList?.map((item: Category) => (
              <option key={item._id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="country"
            className="text-primary mb-[6px] block text-[14px] font-bold"
          >
            Quốc gia
          </label>
          <select
            onChange={handleFilterCountry}
            defaultValue={country}
            name="country"
            id="country"
            className="text-primary bg-dark-three w-full rounded-[4px] px-[10px] py-[8px] text-[14px] font-[600]"
          >
            <option value="">- Tất cả -</option>
            {countryList?.map((item: Country) => (
              <option key={item._id} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
};
