import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <div className="bg-dark-one text-primary">
        <div className="container">
          <div className="border-dark-three flex flex-col items-center gap-[16px] border-b px-[20px] py-[40px] text-[14px] font-[500] sm:flex-row sm:gap-[30px]">
            <Link href="/" className="text-gradient-one text-[24px] font-[900]">
              HW.Phim
            </Link>
            <p className="text-justify sm:text-left">
              HW.Phim - Trang web xem phim trực tuyến miễn phí chất lượng cao
              với giao diện trực quan, tốc độ tải trang nhanh, cùng kho phim với
              hơn 10.000+ phim mới, phim hay, luôn cập nhật phim nhanh, hứa hẹn
              sẽ đem lại phút giây giải trí tuyệt vời cho bạn.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[16px] px-[20px] py-[30px] sm:justify-between">
            <p className="text-[14px] font-[500]">
              © 2025 HW.Phim. All rights reserved.
            </p>
            <ul className="flex items-center gap-[30px]">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="text-[20px]"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="text-[20px]"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  className="text-[20px]"
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
