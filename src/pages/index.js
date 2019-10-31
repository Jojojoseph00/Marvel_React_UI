import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import IronMan from "../images/ironman.jpg"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi Marvel</h1>
  //   <p>Let's have some fun</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  // <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <Layout>
    <div class="row">
      <div class="column" style={{ backgroundColor: "#e0e0e0" }}>
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <div class="column">
        <h2>Column 2</h2>
        <div class="babycolumn">
          <h3>test1</h3>
          <p>Some text..</p>
        </div>
        <div class="babycolumn" style={{ backgroundColor: "#e0e0e0" }}>
          <h3>test2</h3>
          <div>
            <img
              src={IronMan}
              style={{ width: "150px", borderRadius: "75px" }}
            ></img>
          </div>
          <p>Some text..</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
