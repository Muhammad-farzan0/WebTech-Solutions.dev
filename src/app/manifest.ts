import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebTech Solutions — Web & App Development Studio",
    short_name: "WebTech Solutions",
    description:
      "Rawalpindi-based web & app development studio building products for teams who want to ship, not just plan.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9FC",
    theme_color: "#0A1F44",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
