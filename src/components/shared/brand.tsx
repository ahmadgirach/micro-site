"use client";

import { bricolageGrotesque } from "@/app/ui/fonts";

export function Brand() {
  return (
    <div className="flex items-center gap-2">
      <img src="/assets/logo.svg" alt="Brand Logo" loading="lazy" />
      <h2
        className={`${bricolageGrotesque.className} font-bold text-2xl tracking-tighter`}
      >
        Microsite
      </h2>
    </div>
  );
}
