import React, { useState, useEffect } from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

import Autocomplete from "./Autocomplete"

//import Autocomplete2 from "./Autocomplete2"
import "../css/auto.css"

const Projects = ({ projects, title, showLink, showlink2 }) => {
  // Create state for our projects list and the selected value
  const [projs, setProjs] = useState(projects)
  const [selected, setSelected] = useState("all")
  const [selectedName, setSelectedName] = useState("")

  // State for the list
  const [projList, setList] = useState([...projects.slice(0, 10)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(projects.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more projects
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = projList.length
      const isMore = currentLength < projects.length
      const nextResults = isMore
        ? projects.slice(currentLength, currentLength + 10)
        : []
      setList([...projList, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = projList.length < projects.length
    setHasMore(isMore)
  }, [projList]) //eslint-disable-line

  // Our function that does the filtering
  const filterProjs = value => {
    let projs = projects

    if (value !== "all") {
      projs = projects.filter(
        proj => proj.propertyDetails.BroadRegion === value
      )
    }
    setSelected(value)
    setProjs(projs)
  }

  const filterProjsByName = value => {
    let projs = projects

    if (value !== "") {
      projs = projects.filter(proj => proj.slug === value)
    }
    setSelectedName(value)
    setProjs(projs)
  }

  var myArray = projs.slice(0, 9).map(function (item) {
    return item.slug
  })

  return (
    <section className="section projects">
      <Title title={title} />
      {showlink2 && (
        <div
          onClick={e => filterProjsByName(e.target.value)}
          value={selectedName}
        >
          <Autocomplete suggestions={myArray} />
        </div>
      )}
      <div id="menu">
        {showlink2 && (
          <select
            className="section-title btn center-btn"
            onChange={e => filterProjs(e.target.value)}
            value={selected}
          >
            <option value="all">All Region</option>

            {projs.map(category => (
              <option
                key={category.id}
                value={category.propertyDetails.BroadRegion}
              >
                {category.propertyDetails.BroadRegion}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="section-center project-wrapper">
        {projs.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
      {showlink2 && (
        <div>
          {hasMore ? (
            <a className="btn center-btn" onClick={handleLoadMore}>
              Load More
            </a>
          ) : (
            <p className="column1">- End of Project List -</p>
          )}
        </div>
      )}
      {showLink && (
        <Link to="/project" className="btn center-btn">
          all projects
        </Link>
      )}
    </section>
  )
}

export default Projects
