/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  totalPage: number | undefined;
};

export const PaginationMovie = ({ totalPage }: Props) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";
  const route = useRouter();

  const handlePagination = (event: any) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString()); // Lấy tất cả cặp key/value hiện tại từ URL

    if (value) {
      params.set("page", value);
    } else {
      params.delete("page");
    }

    route.push(`?${params.toString()}`);
  };

  return (
    <>
      {totalPage && (
        <div className="mt-[30px]">
          <select
            onChange={handlePagination}
            defaultValue={page}
            className="border-secondary text-secondary bg-dark-three rounded-[4px] border px-[10px] py-[6px] text-[14px] font-[600]"
          >
            {Array(totalPage)
              .fill("")
              .map((_, index) => (
                <option key={index} value={index + 1}>
                  Trang {index + 1}
                </option>
              ))}
          </select>
        </div>
      )}
    </>
  );
};
