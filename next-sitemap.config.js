/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://aryanvaish-portfolio.vercel.app",

  generateRobotsTxt: true,

  exclude: ["/404", "/500"],

  changefreq: "weekly",
  priority: 0.7, // medium priority for all pages

  sitemapSize: 5000,

  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*", // All crawlers
        allow: "/", // Allow all pages
      },
      {
        userAgent: "GPTBot", // Example of a selective bot policy (optional)
        disallow: ["/private"], // block specific routes if needed
      },
    ],
    additionalSitemaps: [
      "https://aryanvaish-portfolio.vercel.app/sitemap.xml", // ensures Google reads it
    ],
  },

  transform: async (config, path) => {
    if (path.includes("/admin")) {
      return null;
    }

    return {
      loc: path, // page URL
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
