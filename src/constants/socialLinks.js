//import React if we want to set up the following as component
import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaPhoneSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: (
      <FaFacebookSquare className="social-icon"></FaFacebookSquare>
    ),
    url: "https://twitter.com/share?ref_src=twsrc%5Etfw",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/share?ref_src=twsrc%5Etfw",
  },
  {
    id: 6,
    icon: <FaWhatsappSquare className="social-icon"></FaWhatsappSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 7,
    icon: <FaPhoneSquare className="social-icon"></FaPhoneSquare>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
