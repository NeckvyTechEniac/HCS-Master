module.exports = {
    // add envoirnment variable in .env file and add your website URL

    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            }
        ]
    }
};
