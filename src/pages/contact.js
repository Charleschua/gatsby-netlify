import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xwkaznwz" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                required={true}
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                required={true}
                placeholder="email"
                className="form-control"
              />
              <input
                type="tel"
                name="phone"
                placeholder="tel contact (* optional)"
                className="form-control"
              />

              <label>
                <select className="form-control" name="request" required>
                  <option value="Choose One Option">
                    How Can We Help? ( Choose Here )
                  </option>
                  <option value="Book Showflat Viewing">
                    Book Showflat Viewing
                  </option>
                  <option value="Request e-Brochure">Request e-Brochure</option>
                  <option value="Request Floorplan & Price List">
                    Request Floorplan & Price List
                  </option>
                  <option value="Chat on Whatsapp">Chat on Whatsapp</option>
                </select>
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="message ( indicate project name, if any.  thank you )"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
        <a href="tel:+6591884319" className="btn center-btn">
          Call Us
        </a>
      </section>
    </Layout>
  )
}

export default contact
