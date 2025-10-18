import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    qualities: [75, 100],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
}

export default nextConfig
