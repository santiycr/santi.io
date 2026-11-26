import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { ShareCard } from "@/lib/share-card";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<ShareCard />, { ...size });
}
