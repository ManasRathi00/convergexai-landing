"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function" &&
      GA_TRACKING_ID
    ) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
