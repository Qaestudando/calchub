import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calchub.com.br";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "daily",
    },

    {
      url: `${baseUrl}/about`,
      priority: 0.6,
      changeFrequency: "monthly",
    },

    {
      url: `${baseUrl}/contact`,
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      url: `${baseUrl}/privacy`,
      priority: 0.3,
      changeFrequency: "yearly",
    },

    {
      url: `${baseUrl}/terms`,
      priority: 0.3,
      changeFrequency: "yearly",
    },

    {
      url: `${baseUrl}/calculators/compound-interest`,
      priority: 0.9,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/calculators/simple-interest`,
      priority: 0.9,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/calculators/percentage`,
      priority: 0.9,
      changeFrequency: "weekly",
    },

    {
      url: `${baseUrl}/calculators/rule-of-three`,
      priority: 0.9,
      changeFrequency: "weekly",
    },
  ];
}