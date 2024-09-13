export default function sitemap() {
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    return [
        {
            url: "/",
            lastmod: currentDate,
            changefreq: "daily",
            priority: 1.0,
        },
        {
            url: "/about",
            lastmod: currentDate,
            changefreq: "monthly",
            priority: 0.7,
        },
        {
            url: "/contact",
            lastmod: currentDate,
            changefreq: "monthly",
            priority: 0.7,
        },
        // Add more URLs as needed
    ];
}
