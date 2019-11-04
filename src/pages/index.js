import React from "react"
import Layout from "../components/layout"
import IronManComic from "../images/ironmancomic.jpg"
import APIgetter from "../components/apigetter"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../components/header.css"
import Image from "../components/image"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import IronMan from "../images/ironman.jpg"
import Thanos from "../images/thanos.jpg"
import SilverSurfer from "../images/silversurfer.jpg"
import DrDoom from "../images/drdoom.jpg"
import { useState } from "react"
import ThanosAPI from "../components/thanosapi"

const IssueName = "ComicBook API Title"

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

var choice = 0
console.log("choice is " + choice)

function Iron() {
  console.log(choice)
  choice = 4
  // e.preventDefault()
  console.log("Click Iron Man")
  console.log(choice)
  console.log(selectedChar)
}
function Doom() {
  console.log(choice)
  choice = 3
  // e.preventDefault()
  console.log("Click Dr Doom")
  console.log(choice)
  console.log(selectedChar)
}
function Thane() {
  console.log(choice)
  choice = 2
  // e.preventDefault()
  console.log("Click Thanos the mad titan")
  console.log(choice)
  console.log(selectedChar)
}
function Sliver() {
  console.log(choice)
  choice = 1
  // e.preventDefault()
  console.log("Click Silver surfer.")
  console.log(choice)
  console.log(selectedChar)
}

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

const CharInfo = () => (
  <div>
    <p>Testing YelloW</p>
  </div>
)

const Header = () => (
  // <!-- Sidebar -->
  <div id="sidebar">
    <Image></Image>
    <ul class="nav">
      <li>
        <a href="#">Overview</a>
      </li>

      <div style={{ width: "200px", float: "center" }}>
        <ButtonGroup vertical>
          <li>
            <Button
              variant="danger"
              style={{ width: "200px" }}
              onClick={Iron}
              // onClick={IndexPage()}
              // Need to refresh the indexpage const
            >
              <img
                src={IronMan}
                style={{ width: "200px", borderRadius: "100px" }}
              ></img>
              Iron Man
            </Button>
          </li>
          <li>
            <Button variant="danger" style={{ width: "200px" }} onClick={Doom}>
              <img
                src={DrDoom}
                style={{ width: "200px", borderRadius: "100px" }}
              ></img>
              Dr Doom
            </Button>
          </li>
          <li>
            <Button variant="danger" style={{ width: "200px" }} onClick={Thane}>
              <img
                src={Thanos}
                style={{ width: "200px", borderRadius: "100px" }}
              ></img>
              Thanos
            </Button>
          </li>
          <li>
            <Button
              variant="danger"
              style={{ width: "200px" }}
              onClick={Sliver}
            >
              <img
                src={SilverSurfer}
                style={{ width: "200px", borderRadius: "100px" }}
              ></img>
              Silver Surfer
            </Button>
          </li>
        </ButtonGroup>
      </div>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const IndexPage = () => (
  // Layout stuff
  <Layout>
    <div>
      <Header />
    </div>
    <div class="row">
      <div class="column" style={{ backgroundColor: "#e0e0e0" }}>
        <h2>Comics featuring {selectedChar}:</h2>
        <p>This is where we put a gallery</p>
        <CharInfo />
        <div class="row">
          <div class="column">
            <img src={SilverSurfer}></img>
          </div>
        </div>
      </div>
      <div class="column">
        <h2>{IssueName}</h2>
        <div class="babycolumn">
          <img src={IronManComic}></img>
        </div>
        <ThanosAPI></ThanosAPI>
      </div>
    </div>
  </Layout>
)

export default IndexPage
