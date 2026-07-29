import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";
import { locationPages } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://webtechsolutions.dev";
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/case-studies",
    "/pricing",
    "/blog",
    "/contact",
    "/locations",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const caseStudyRoutes = caseStudies.map((s) => `/case-studies/${s.slug}`);
  const locationRoutes = locationPages.map((l) => `/locations/${l.slug}`);

  const routes = [
    ...staticRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...locationRoutes,
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.includes("/blog/") || route.includes("/case-studies/")
          ? 0.6
          : route.includes("/locations/")
            ? 0.85
            : 0.8,
  }));
}
