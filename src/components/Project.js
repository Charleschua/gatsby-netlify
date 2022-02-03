import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { ImLocation } from "react-icons/im"

const Project = ({ id, title, image, slug }) => {
  return (
    <article className="project-card">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-image" />
      )}
      <div className="project-information">
        <Link
          to={`/projects/${slug}`}
          className="project-text-wrap btn"
          key={id}
        >
          <ImLocation />
          <div className="project-title">{title}</div>
        </Link>
      </div>
    </article>
  )
}

Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  propertyDetails: PropTypes.object.isRequired,
  locationMap: PropTypes.object.isRequired,
  unitMix: PropTypes.arrayOf(PropTypes.object).isRequired,
  floorPlan: PropTypes.object.isRequired,
}

export default Project
