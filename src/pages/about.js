import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I currently design and develop in my free time. I like dogs a lot</p>
      <p>
        Want to work with me? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
