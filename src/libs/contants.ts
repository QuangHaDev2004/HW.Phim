export const Trending_Tabs = [
  {
    id: "danh-sach",
    name: "Tất cả",
    url: `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-moi`,
  },
  {
    id: "danh-sach/phim-bo",
    name: "Phim bộ",
    url: `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-bo`,
  },
  {
    id: "danh-sach/phim-le",
    name: "Phim lẻ",
    url: `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-le`,
  },
];

export const Upcoming_Tabs = [
  {
    id: "phim-sap-chieu",
    url: `${process.env.NEXT_PUBLIC_API_BE}/danh-sach/phim-sap-chieu`,
  },
];

export const Menu = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    title: "Phim lẻ",
    link: "/danh-sach/phim-le",
  },
  {
    id: 3,
    title: "Phim bộ",
    link: "/danh-sach/phim-bo",
  },
  {
    id: 4,
    title: "TV Shows",
    link: "/danh-sach/tv-shows",
  },
  {
    id: 5,
    title: "Hoạt hình",
    link: "/danh-sach/hoat-hinh",
  },
];
