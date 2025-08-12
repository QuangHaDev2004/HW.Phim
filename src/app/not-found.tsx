import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-[120px] mb-[60px] flex h-[40vh] flex-col items-center justify-center text-center">
      <h2 className="text-[40px] font-[700] text-red">404 Not Found</h2>
      <p className="mt-[10px] mb-[30px] text-red">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="inline-flex rounded-[5px] bg-red px-[40px] py-[15px] text-primary"
      >
        Return Home
      </Link>
    </div>
  );
}
