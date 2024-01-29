/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://pts.holdings",
    generateRobotsTxt: true,
    changefreq: "monthly",
}
