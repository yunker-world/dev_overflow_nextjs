import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={cn("object-contain", href ? "rounded-full" : "")}
      />

      <p className={cn("flex items-center gap-1", textStyles)}>
        {value}{" "}
        <span
          className={cn(
            "small-regular line-clamp-1",
            isAuthor ? "max-sm:hidden" : ""
          )}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
