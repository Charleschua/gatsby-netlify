import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Project" description="real estate new launch" />
      <section className="project-page">
        <Projects projects={projects} title="new launch" showlink2/>
      </section>
    </Layout>
  )
}

export default ProjectPage

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        slug
        title
        overview
        url
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
        image2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overview
        propertyDetails {
          id
          BroadRegion
          Category
          Country
          District
          Location
          ProjectName
          Region
          Road
        }
        locationMap {
          id
          publicURL
        }
        unitMix {
          AreaSqft
          BedroomType
          Units
        }
        floorPlan {
          id
          url
        }
      }
    }
  }
`
