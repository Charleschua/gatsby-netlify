import "../css/main.css"
import Slideshow from "../components/Slideshow"
import React from "react"
import Layout from "../components/Layout"

const slideShow = () => {
  return (
    <Layout>
      <div className="">
        <Slideshow />
      </div>
    </Layout>
  )
}

export default slideShow
