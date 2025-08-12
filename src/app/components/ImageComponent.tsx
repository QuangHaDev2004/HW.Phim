"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className: string;
};

export const ImageComponent = ({ src, alt, className }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${className}${isLoaded ? "" : "opacity-0 blur-md"}`}
        fill
        priority
        sizes="100%"
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
