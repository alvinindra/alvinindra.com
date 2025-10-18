import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/images/icons/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/images/icons/android-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/images/blog/capture-alvinindra.com.png",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  }
}
