import Link from "next/link";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

type CumbItem = {
  name: string;
  slug?: string;
  isCurrent?: boolean;
};

type Props = {
  breadCumbData: CumbItem[];
};

export const BreadCumb = ({ breadCumbData }: Props) => {
  return (
    <>
      <nav className="text-primary mb-[20px] flex flex-wrap items-center gap-x-[16px] gap-y-[10px]">
        <Link
          href="/"
          className="flex items-center gap-[8px] text-[14px] font-[500] transition-all duration-300 hover:text-white"
        >
          <FaHouse className="text-[16px]" />
          <span className="mb-[-1px]">Trang chủ</span>
        </Link>

        {breadCumbData.map((item: CumbItem, index: number) => (
          <span
            key={index}
            className="flex items-center gap-[8px] text-[14px] font-[500]"
          >
            <FaChevronRight className="text-[14px]" />
            {item.isCurrent ? (
              <span className="mb-[-1px] text-yellow">{item.name}</span>
            ) : (
              <Link href={item.slug || ""}>
                <span className="cursor-mo mb-[-1px] transition-all duration-300 hover:text-white">
                  {item.name}
                </span>
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
};
