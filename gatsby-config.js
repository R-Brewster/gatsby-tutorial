module.exports = {
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "local.gatsby-tutorial.com",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        }
    ],
};
