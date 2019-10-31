import React from "react"
import Layout from "../components/layout"
import IronMan from "../images/ironman.jpg"

// button 1 onlick: choice = ironman

const choice = 4

const selectedChar =
  choice === 1
    ? "Silver Surfer"
    : choice === 2
    ? "Thanos"
    : choice === 3
    ? "Dr Doom"
    : choice === 4
    ? "Iron Man"
    : "No character Selected"

const Description = {
  SaleDate: "15/05/1998",
  CutoffDate: "15/05/1998",
  UnlimitedDate: "15/05/1998",
  DigitalDate: "15/05/1998",
  Writer: "Youssef",
  Penciller: "El-Moukhtar",
  Letterer: "Mokhtari",
  Summary: "A long time ago in a galaxy far far away",
}

const IndexPage = () => (
  <Layout>
    <div class="row">
      <div class="column" style={{ backgroundColor: "#e0e0e0" }}>
        <h2>{selectedChar}</h2>
        <p>Some text..</p>
      </div>
      <div class="column">
        <h2>Column 2</h2>
        <div class="babycolumn">
          <h3>test1</h3>
          <p>Some text..</p>
          <img src={IronMan} style={{ width: "150px" }}></img>
        </div>
        <div class="babycolumn" style={{ backgroundColor: "#e0e0e0" }}>
          <h3>test2</h3>

          <p>
            <b>Date on sale:</b> {Description.SaleDate}
            <br></br>
            <b>Final cut off order date:</b> {Description.CutoffDate}
            <br></br>
            <b>Unlimited date:</b> {Description.UnlimitedDate}
            <br></br>
            <b>Digital purchase date:</b> {Description.DigitalDate}
            <br></br>
            <b>Writer:</b> {Description.Writer}
            <br></br>
            <b>Penciller:</b> {Description.Penciller}
            <br></br>
            <b>Letterer:</b> {Description.Letterer}
            <br></br> <b>Summary:</b>
          </p>

          <p> {Description.Summary}</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
