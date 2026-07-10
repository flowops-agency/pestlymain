import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** icon = mark only; full = mark + wordmark */
  variant?: "icon" | "full";
  /** light mark + wordmark for dark backgrounds */
  inverted?: boolean;
};

/**
 * Approved mark: image 8 / F recolored — outlined P with phone handset in the bowl.
 * Wordmark is HTML text so "Pestly" always renders.
 */
export default function PestlyLogo({
  className,
  variant = "full",
  inverted = false,
}: Props) {
  const markSrc = inverted ? "/pestly-icon-white.png" : "/pestly-icon.png";

  if (variant === "icon") {
    return (
      <Image
        src={markSrc}
        alt="Pestly"
        width={40}
        height={40}
        unoptimized
        className={cn("h-9 w-9 shrink-0 object-contain", className)}
        priority
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[1.375rem] leading-none sm:text-[1.5rem]",
        className
      )}
      role="img"
      aria-label="Pestly"
    >
      <Image
        src={markSrc}
        alt=""
        width={48}
        height={48}
        unoptimized
        className="h-[1.15em] w-[1.15em] shrink-0 object-contain"
        priority
      />
      <span
        className={cn(
          "select-none font-bold tracking-tight",
          inverted ? "text-white" : "text-[#111111]"
        )}
      >
        Pestly
      </span>
    </span>
  );
}
