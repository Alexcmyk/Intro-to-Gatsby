import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const authorData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          copyright
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.copyright}>
      <p>
        Created by {authorData.site.siteMetadata.author},{" "}
        {authorData.site.siteMetadata.copyright}
      </p>
    </footer>
  )
}

export default Footer
