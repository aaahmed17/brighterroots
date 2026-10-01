import type { ReactNode } from "react";
import Image from "next/image";

type ServiceImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  badge?: ReactNode;
};

export function ServiceImage({
  src,
  alt,
  priority,
  sizes = "(max-width: 768px) 100vw, 33vw",
  badge,
}: ServiceImageProps) {
  return (
    <div className="relative w-full shrink-0 leading-none">
      {badge}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
