import { MetadataRoute } from "next";

const BASE_URL = "https://kevinguo27.github.io";
const IMAGES = ["/headshot-2026.jpg", "/spectral-collapse-visualization.jpg", "/pobax.jpg"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/Kaicheng_Guo_CV.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...IMAGES.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
