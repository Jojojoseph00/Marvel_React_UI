import "../components/header.css"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from "react"
import APIgetter from "../components/apigetter"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import DrDoom from "../images/drdoom.jpg"
import Image from "../components/image"
import IronMan from "../images/ironman.jpg"
import IronManComic from "../images/ironmancomic.jpg"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import SilverSurfer from "../images/silversurfer.jpg"
import Thanos from "../images/thanos.jpg"
import axios from "axios"
import md5 from "md5"

const IndexPage = () => {
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

  const [selectedChar, setSelectedChar] = useState("Comics featuring:")
  let [selectedTitle, setSelectedTitle] = useState("Cable")
  var choice = 0
  console.log("choice is " + choice)

  const Iron = () => {
    console.log(choice)
    choice = 4

    console.log("chosen char: " + setSelectedTitle)
    console.log("Click Iron Man")
    console.log(choice)
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Iron%20Man")
  }
  const Doom = () => {
    console.log(choice)
    choice = 3
    console.log("Click Dr Doom")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Doctor%20Doom")
  }
  const Thane = () => {
    console.log(choice)
    choice = 2
    console.log("Click Thanos the mad titan")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Thanos")
  }
  const Sliver = () => {
    console.log(choice)
    choice = 1
    console.log("Click Silver surfer.")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
    setSelectedTitle("Silver%20surfer")
  }

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
  let comicID = 1493

  const Testfunc = recordname => {
    console.log("I have been pressed " + recordname)
    comicID = recordname
    // return comicID
    console.log(comicID)
  }

  const CharInfo = () => <h2>{selectedChar}</h2>

  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  const ThanosGetter = ({ children }) => {
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
          console.log("Hello I'm here")
          console.log(res.data.data.results)
          // console.log(Object.keys(res.data.data.results[0]))
          setMarvelData(res.data.data.results)
          // console.log(marvelData)
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
              ></img>
              <Button onClick={() => Testfunc(record.id)}>
                {record.title}
              </Button>
            </div>
          )
        })}
      </div>
    )
  }

  ThanosGetter.propTypes = {
    children: PropTypes.node.isRequired,
  }
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????
  // COMICS GALLERY API ???????????????????????????????????????????????????????????????????????????

  // onclick of comicID, call onclick function to attribute a comicID value
  // That value is then used in url for detail information

  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????
  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????
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
          console.log("COmic ID information")
          console.log(res.data.data.results)
          // console.log(Object.keys(res.data.data.results[0]))
          setMarvelData(res.data.data.results)
          // console.log(marvelData)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
      // Might remove the [0]
      // <img src={SilverSurfer}></img>

      <div>
        {marvelData.map((record, index) => {
          return (
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
                {record.dates[3].date.substring(0, 10)}
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
          )
        })}
      </div>
    )
  }

  DescriptionGetter.propTypes = {
    children: PropTypes.node.isRequired,
  }
  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????
  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????
  // DESCRIPTION API ???????????????????????????????????????????????????????????????????????????

  const Header = () => (
    // <!-- Sidebar -->
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
                // onPress={this.onPressButton}
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
    // Layout stuff
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
            <ThanosGetter></ThanosGetter>
          </div>

          <div class="rower">
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>      
            </div>
            <div class="columner">
              <img src={IronManComic}></img>
            </div>
            <div class="columner">
              <img src={IronManComic}></img>       
            </div>
          </div>
        </div>
        <div class="column">
          <div class="babycolumn">
            <img src={IronManComic}></img>
          </div>
          <DescriptionGetter></DescriptionGetter>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
