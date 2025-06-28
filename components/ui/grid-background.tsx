import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GridBackground({
  className,
  children,
}: GridBackgroundProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Grid pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:90px_80px]",
          "[background-image:linear-gradient(to_right,var(--gray-medium)_1px,transparent_1px),linear-gradient(to_bottom,var(--gray-medium)_1px,transparent_1px)]"
        )}
      />
      {/* Blurred white circle in the center */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "120vw",
          height: "40vw",
          minWidth: 400,
          minHeight: 400,
          maxWidth: 700,
          maxHeight: 700,
          background: "white",
          opacity: 0.85,
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
