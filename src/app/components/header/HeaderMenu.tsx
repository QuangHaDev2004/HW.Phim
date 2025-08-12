"use client";
import { Menu } from "@/libs/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isShowMenu: boolean;
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderMenu = ({ isShowMenu, setIsShowMenu }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`lg:block ${isShowMenu ? "bg-dark-two fixed top-0 left-0 z-[999] h-[100vh] w-[280px]" : "hidden"}`}
      >
        <ul className="flex flex-wrap items-center gap-0 lg:gap-[24px]">
          {Menu.map((item) => (
            <Link
              onClick={() => setIsShowMenu(false)}
              key={item.id}
              href={item.link}
              className={`hover:text-red hover:bg-dark-three w-full p-[16px] text-[14px] font-[600] capitalize transition-all duration-300 ease-in-out lg:w-auto lg:p-0 lg:hover:bg-transparent ${pathname === item.link ? "text-red bg-dark-three lg:bg-transparent" : ""}`}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsShowMenu(false)}
        className={`${isShowMenu ? "fixed inset-0 z-[998] block bg-[#000000c2]" : "hidden"}`}
      ></div>
    </>
  );
};
