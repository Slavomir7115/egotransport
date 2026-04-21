import { mestaData } from "@/data/mestaData";

export default function sitemap() {
  const baseUrl = "https://www.egotransport.sk";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ochrana-osobnych-udajov`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ochrana-suborov-cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
  const mestoPages = mestaData.map((mesto) => ({
    url: `${baseUrl}/stahovanie/${mesto.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...mestoPages];
}
