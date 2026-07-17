import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://calchub.com.br/sitemap.xml",

    host: "https://calchub.com.br",
  };
}