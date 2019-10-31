import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Image from "./image"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import IronMan from "../images/ironman.jpg"
import Thanos from "../images/thanos.jpg"
import SilverSurfer from "../images/silversurfer.jpg"
import DrDoom from "../images/drdoom.jpg"

const choice = 2
export { choice }

const Header = ({ siteTitle }) => (
  // <!-- Sidebar -->
  <div id="sidebar">
    <Image></Image>
    <ul class="nav">
      <li>
        <a href="#">About</a>
      </li>

      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <div style={{ width: "200px", float: "center" }}>
          <ButtonGroup vertical>
            <li>
              <Button style={{ width: "200px" }}>
                <img
                  src={IronMan}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Iron Man
              </Button>
            </li>
            <li>
              <Button style={{ width: "200px" }}>
                <img
                  src={DrDoom}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Dr Doom
              </Button>
            </li>
            <li>
              <Button style={{ width: "200px" }}>
                <img
                  src={Thanos}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Thanos
              </Button>
            </li>
            <li>
              <Button style={{ width: "200px" }}>
                <img
                  src={SilverSurfer}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Silver Surfer
              </Button>
            </li>
          </ButtonGroup>
        </div>
      </li>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
