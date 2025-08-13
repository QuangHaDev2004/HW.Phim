"use client";

import Link from "next/link";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { SearchForm } from "./SearchForm";
import { HeaderMenu } from "./HeaderMenu";
import { Suspense, useState } from "react";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <>
      <header className="text-primary bg-dark-one fixed top-0 left-0 z-[997] w-full">
        <div className="container flex h-[70px] items-center justify-between gap-[20px]">
          <div className="flex items-center gap-[32px]">
            <Link href="/" className="text-gradient-one text-[28px] font-[900]">
              HW.Phim
            </Link>
            <HeaderMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
          </div>
          <div className="flex items-center gap-[20px] sm:gap-[24px]">
            <Suspense>
              <SearchForm
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
              />
            </Suspense>

            <button
              onClick={() => setIsShowSearch(!isShowSearch)}
              className="block sm:hidden"
            >
              <FaMagnifyingGlass className="text-primary size-[20px] cursor-pointer" />
            </button>
            <button
              onClick={() => setIsShowMenu(!isShowMenu)}
              className="lg:hidden"
            >
              <FaBars className="text-primary size-[24px] cursor-pointer" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
