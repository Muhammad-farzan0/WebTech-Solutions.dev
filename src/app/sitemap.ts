import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";

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
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const caseStudyRoutes = caseStudies.map((s) => `/case-studies/${s.slug}`);

  const routes = [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/blog/") || route.includes("/case-studies/") ? 0.6 : 0.8,
  }));
}
