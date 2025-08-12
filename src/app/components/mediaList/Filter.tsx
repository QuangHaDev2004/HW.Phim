/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Tab } from "./MediaList";
import { TitleHome } from "../title/TitleHome";

type Props = {
  Tabs: Tab[];
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
  text: string;
};

export const Filter = ({ Tabs, activeTabId, setActiveTabId, text }: Props) => {
  return (
    <>
      <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[20px]">
        <TitleHome text={text} />
        {Tabs.length === 1 ? (
          <Link
            href={"/danh-sach/phim-sap-chieu"}
            className="bg-gradient-1 text-primary rounded-[20px] px-[32px] py-[4px] text-[14px] font-[600]"
          >
            Xem thêm
          </Link>
        ) : (
          <ul className="border-dark-three text-primary flex rounded-[4px] border text-[14px] font-[500]">
            {Tabs.map((item: any) => (
              <li
                key={item.id}
                className={`cursor-pointer rounded-[4px] p-[10px] sm:px-[16px] sm:py-[10px] ${item.id === activeTabId ? "bg-gradient-1" : "hover:bg-dark-three transition-all duration-300"}`}
                onClick={() => setActiveTabId(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
