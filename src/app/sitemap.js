const siteUrl = "https://www.calgarycarsforcash.ca";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/cash-for-junk-cars-calgary`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/scrap-car-removal-calgary`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
