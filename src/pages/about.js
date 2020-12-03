import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <p>I currently design and develop in my free time. I like dogs a lot</p>
      <p>
        Want to work with me? <Link to="/contact">Contact me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
