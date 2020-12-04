module.exports = {
  siteMetadata: {
    title: "Alexander.",
    author: "Alexander Kirts",
    copyright: "© 2021",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
