import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero2 />
      <Projects projects={projects} title="new launch" showLink></Projects>
      <Jobs />
      <Services />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        overview
        url
        github
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        content
        date(formatString: "MMM Do, YYYY")
        desc
        slug
        id
        category
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
