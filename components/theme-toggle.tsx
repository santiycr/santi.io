"use client";

import { useLayoutEffect } from "react";
import { site } from "@/content/site";

function persist(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode can block storage. The choice still applies for this view.
  }
}

export function ThemeToggle() {
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        document.documentElement.dataset.theme = stored;
      }
    } catch {
      // Ignore storage failures and keep the system theme.
    }
  }, []);

  const className =
    "inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm text-ink hover:bg-soft";

  return (
    <div className="flex">
      <button type="button" className={`when-light ${className}`} onClick={() => persist("dark")}>
        {site.theme.toDark}
      </button>
      <button type="button" className={`when-dark ${className}`} onClick={() => persist("light")}>
        {site.theme.toLight}
      </button>
    </div>
  );
}
