export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/dakujeme"],
    },
    sitemap: "https://www.egotransport.sk/sitemap.xml",
  };
}
