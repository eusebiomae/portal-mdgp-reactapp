import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = fetch("https://mdgp.com.br/sitemap.xml");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://mdgp.com.br/sitemap.xml",
  };
}
