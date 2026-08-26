import { seo } from "@/content/site";

export default function sitemap() {
  const routes = ["", "/web-samples", "/video-samples", "/pricing/web", "/pricing/video"];
  return routes.map((path, i) => ({
    url: `${seo.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
