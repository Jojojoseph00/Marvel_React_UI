import "../components/header.css"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import DrDoom from "../images/drdoom.jpg"
import Image from "../components/image"
import IronMan from "../images/ironman.jpg"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SilverSurfer from "../images/silversurfer.jpg"
import Thanos from "../images/thanos.jpg"
import axios from "axios"
import md5 from "md5"

const IndexPage = () => {
  const [selectedChar, setSelectedChar] = useState("Comics featuring:")
  let [selectedTitle, setSelectedTitle] = useState("Cable")
  var choice = 0
  let [comicID, setcomicID] = useState(7500)

  // Clicking functions
  const Iron = () => {
    choice = 4
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Iron%20Man")
  }
  const Doom = () => {
    choice = 3
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Doctor%20Doom")
  }
  const Thane = () => {
    choice = 2
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Thanos")
  }
  const Sliver = () => {
    choice = 1
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Silver%20surfer")
  }

  // Set character based on click
  const Charsetter = choice => {
    if (choice === 1) {
      return "Comics featuring the Silver Surfer"
    }
    if (choice === 2) {
      return "Comics featuring The Mad Titan Thanos"
    }
    if (choice === 3) {
      return "Comics featuring Dr Doom"
    }
    if (choice === 4) {
      return "Comics featuring Iron Man"
    } else {
      return "No character Selected"
    }
  }

  // Setting comic ID
  const IDSetter = recordname => {
    console.log(comicID)
    setcomicID(recordname)
  }

  const CharInfo = () => <h2>{selectedChar}</h2>

  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  const ComicsGetter = ({ children }) => {
    // There is an api alternative in case I exceed 3000 calls/day
    const api_key = "11bc117d9a1b6b94e6f0ac7bdb36f2a6"
    //   const api_key = "14e78f65cc59325dadf4118e889a89fe"
    const secret_key = "fe9782be64504bb8fca885e687938508268400a5"
    //   const secret_key = "6b7c3edc5d29dc559e57853ffd35f0aa543d600b"
    const timestamp = Date.now()
    const hash_key = timestamp + secret_key + api_key
    const hash_string = md5(hash_key)
    const [marvelData, setMarvelData] = useState([])
    const limit = 6

    useEffect(() => {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics?title=${selectedTitle}&orderBy=title&limit=${limit}&ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`
        )
        .then(res => {
          // console.log("Hello I'm here")
          // console.log(res.data.data.results)
          setMarvelData(res.data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
      <div>
        {marvelData.map((record, index) => {
          return (
            <div class="columner">
              <img
                src={record.thumbnail.path + ".jpg"}
                style={{ width: "100%" }}
                onClick={() => IDSetter(record.id)}
              ></img>
              <p>{record.title}</p>
            </div>
          )
        })}
      </div>
    )
  }

  ComicsGetter.propTypes = {
    children: PropTypes.node.isRequired,
  }
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????

  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????
  const DescriptionGetter = ({ children }) => {
    const api_key = "11bc117d9a1b6b94e6f0ac7bdb36f2a6"
    //   const api_key = "14e78f65cc59325dadf4118e889a89fe"
    const secret_key = "fe9782be64504bb8fca885e687938508268400a5"
    //   const secret_key = "6b7c3edc5d29dc559e57853ffd35f0aa543d600b"
    const timestamp = Date.now()
    const hash_key = timestamp + secret_key + api_key
    const hash_string = md5(hash_key)
    const [marvelData, setMarvelData] = useState([])

    useEffect(() => {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/${comicID}??&ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`
        )
        .then(res => {
          // console.log("Comic ID information")
          // console.log(res.data.data.results)
          setMarvelData(res.data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
      // URGENT: Replace dates[2] and name[2] duplicates by adding CSSConditionRule, if date[3]= false then date[2 instead]
      <div>
        {marvelData.map((record, index) => {
          return (
            <div>
              <div class="babycolumn">
                <img
                  src={record.thumbnail.path + ".jpg"}
                  style={{ width: "100%", float: "left" }}
                ></img>
              </div>
              <div class="babycolumn" style={{ backgroundColor: "#e0e0e0" }}>
                <h1>{record.title}</h1> <h3>Detailed information</h3>
                <br></br>    
                <p>
                  <b>Date on sale:</b> {record.dates[0].date.substring(0, 10)}
                  <br></br>
                  <b>Print price:</b> {record.prices[0].price}$<br></br>
                  <b>Unlimited date:</b> {record.dates[2].date.substring(0, 10)}
                  <br></br>
                  <b>Digital purchase date:</b> 
                  {record.dates[2].date.substring(0, 10)}
                  <br></br>
                  <b>Editor:</b> {record.creators.items[1].name}
                  <br></br>
                  <b>Penciller:</b> {record.creators.items[2].name}
                  <br></br>
                  <b>Inker:</b> {record.creators.items[0].name}
                  <br></br>
                  <b>Summary:</b>
                </p>
                <p> {record.description}</p>         
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  DescriptionGetter.propTypes = {
    children: PropTypes.node.isRequired,
  }
  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????

  const Header = () => (
    <div id="sidebar">
      <Image></Image>
      <ul class="nav">
        <div style={{ width: "200px", float: "center" }}>
          <ButtonGroup vertical>
            <li>
              <Button
                variant="danger"
                style={{ width: "200px" }}
                onClick={Iron}
              >
                <img
                  src={IronMan}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Iron Man
              </Button>
            </li>
            <li>
              <Button
                variant="danger"
                style={{ width: "200px" }}
                onClick={Doom}
              >
                <img
                  src={DrDoom}
                  style={{ width: "200px", borderRadius: "100px" }}
                ></img>
                Dr Doom
              </Button>
            </li>
            <li>
              <Button
                variant="danger"
                style={{ width: "200px" }}
                onClick={Thane}
              >
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

  return (
    // Layout stuff column
    <Layout>
      <div>
        <Header />
      </div>
      <div class="row">
        <div class="column" style={{ backgroundColor: "#e0e0e0" }}>
          <p>
            <CharInfo />
          </p>
          <div class="rower">
            <ComicsGetter></ComicsGetter>
          </div>
        </div>
        <div class="column">
          <DescriptionGetter></DescriptionGetter>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
