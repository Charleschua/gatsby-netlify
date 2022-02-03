import * as React from "react"

import Layout from "../components/Layout"

const ProjectBrochure = () => {
  return (
    <Layout>
      <h1>Canninghill Pier Project Factsheet</h1>

      <iframe
        title="Project_Brochure"
        width="100%"
        height="600px"
        src="/MainBrochure.pdf#toolbar=0"
      ></iframe>
    </Layout>
  )
}

export default ProjectBrochure
