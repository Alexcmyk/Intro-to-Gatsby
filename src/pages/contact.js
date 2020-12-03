import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact me</h1>
      <p>
        The best way to contact me is via{" "}
        <a href="https://www.twitter.com/alexcmyk" target="blank">
          {" "}
          @alexcmyk
        </a>{" "}
        on twitter.
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
