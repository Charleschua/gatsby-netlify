import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slideshow from "../components/Slideshow"
import { ListItem } from "@material-ui/core"
import Title from "../components/Title"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/main.css"

library.add(fab, faEnvelope)

const ComponentName = ({ data }) => {
  const { title, slug, overview, propertyDetails, unitMix } = data.project

  const baseUrl = "https://testing-strapi-gatsby-build.netlify.app/"
  const [readMore, setReadMore] = useState(false)
  const linkName = readMore ? "Read Less <<" : "Read More >>"

  const [unitMixState, setUnitMix] = useState([...unitMix.slice(0, 9)])

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(unitMix.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more projects
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = unitMixState.length
      const isMore = currentLength < unitMix.length
      const nextResults = isMore
        ? unitMix.slice(currentLength, currentLength + 10)
        : []
      setUnitMix([...unitMixState, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = unitMixState.length < unitMix.length
    setHasMore(isMore)
  }, [unitMixState]) //eslint-disable-line

  return (
    <Layout>
      <SEO title={title} description={overview} />
      <section className="section">
        <div className="section-center">
          <h1>{title}</h1>

          <section>
            <div>
              <Slideshow />
            </div>
          </section>
          <section className="section">
            <Title title="Overview" />
            <div className="section-center">
              <div className="">
                {readMore ? overview : `${overview.substring(0, 250)}`}
                <a
                  className="read-more-link"
                  onClick={() => setReadMore(!readMore)}
                >
                  <h4>{linkName}</h4>
                </a>
              </div>
              
            </div>
          </section>
          <section className="section-center">
            <div>
              <section className="row">
                <Title title="Property Details" />

                <ListItem key="broadRegion">
                  <div className="column2">Broad Region :</div>
                  <div className="column2">{propertyDetails.BroadRegion}</div>
                </ListItem>
                <ListItem key="category">
                  <div className="column2">Category :</div>
                  <div className="column2">{propertyDetails.Category}</div>
                </ListItem>
                <ListItem key="country">
                  <div className="column2">Country :</div>
                  <div className="column2">{propertyDetails.Country}</div>
                </ListItem>
                <ListItem key="district">
                  <div className="column2">District :</div>
                  <div className="column2">{propertyDetails.District}</div>
                </ListItem>
                <ListItem key="location">
                  <div className="column2">Location :</div>
                  <div className="column2">{propertyDetails.Location}</div>
                </ListItem>
                <ListItem>
                  <div className="column2">Project Name :</div>
                  <div className="column2">{propertyDetails.ProjectName}</div>
                </ListItem>
                <ListItem key="region">
                  <div className="column2">Region :</div>
                  <div className="column2">{propertyDetails.Region}</div>
                </ListItem>
                <ListItem key="road">
                  <div className="column2">Road :</div>
                  <div className="column2">{propertyDetails.Road}</div>
                </ListItem>
              </section>
            </div>
          </section>

          <section className="section section-center">
            <div>
              <Title title="Location Map" />

              <iframe
                src="/CanningHill_Piers_Location_Map.pdf#toolbar=0"
                title="CHP_Location_Map"
                width="100%"
                height="800px"
                loading="lazy"
                allowFullScreen
              >
                <p>Your browser does not support iframes</p>
              </iframe>
            </div>
          </section>
          <Link to="/contact" className="btn center-btn">
            contact us
          </Link>
          <section className="section section-center">
            <Title title="Unit Mix" />

            <div className="row">
              <div className="column3">
                <b>Bedroom Type</b>
              </div>
              <div className="column3">
                <b>Area (Sqft)</b>
              </div>
              <div className="cloumn3">
                <b>Units</b>
              </div>

              {unitMix.map(unitMix => (
                <ListItem key={unitMix.id}>
                  <div className="column3" key="bedroomId">
                    <p>{unitMix.BedroomType}</p>
                  </div>
                  <div className="column3" key="areaId">
                    <p>{unitMix.AreaSqft}</p>
                  </div>
                  <div className="column3" key="unitId">
                    <p>{unitMix.Units}</p>
                  </div>
                </ListItem>
              ))}
              {hasMore ? (
                <div className="btn center-btn" onClick={handleLoadMore}>Load More</div>
              ) : (
                <p className="column1">-  End of List  -</p>
              )}
            </div>
          </section>
          <div className="section-title">
            <h3> " Share this project ..."</h3>
          </div>
          <div>
            <ul className="section-center social-links">
              <li>
                <a
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    baseUrl +
                    slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    size="2x"
                    color="#3b5998"
                  />
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://twitter.com/share?url=" +
                    baseUrl +
                    slug +
                    "&text" +
                    title +
                    "&via" +
                    "twitterHandle"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    size="2x"
                    color="#55acee"
                  />
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://currents.google.com/share?url=" + baseUrl + slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "google"]}
                    size="2x"
                    color="#dc4e41"
                  />
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.linkedin.com/shareArticle?url=" +
                    baseUrl +
                    slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    size="2x"
                    color="#0077b5"
                  />
                </a>
              </li>
              <li>
                <a
                  href={
                    "mailto:?subject=<SUBJECT>&body=<BODY>" + baseUrl + slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    color="#0077b5"
                  />
                </a>
              </li>
            </ul>
          </div>

          <Link to="/project" className="btn center-btn">
            all projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
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
        BroadRegion
        Category
        Country
        District
        Location
        ProjectName
        Region
        Road
      }
      unitMix {
        AreaSqft
        BedroomType
        Units
      }
      locationMap {
        id
        publicURL
      }

      floorPlan {
        id
        url
      }
    }
  }
`

export default ComponentName
