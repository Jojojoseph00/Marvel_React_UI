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
// import { useState } from "react"
// import ThanosAPI from "../components/thanosapi"
// import axios from "axios"
// import md5 from "md5"

const IndexPage = () => {
  const [selectedChar, setSelectedChar] = useState("Comics featuring:")

  // API SERVICE ???????????????????????????????????????????????????????????????????????????
  // API SERVICE ???????????????????????????????????????????????????????????????????????????
  // API SERVICE ???????????????????????????????????????????????????????????????????????????
  // const AllComics = ({ children }) => {
  //   //   const api_key = "11bc117d9a1b6b94e6f0ac7bdb36f2a6"
  //   const api_key = "14e78f65cc59325dadf4118e889a89fe"
  //   //   const secret_key = "fe9782be64504bb8fca885e687938508268400a5"
  //   const secret_key = "6b7c3edc5d29dc559e57853ffd35f0aa543d600b"
  //   const timestamp = Date.now()
  //   const hash_key = timestamp + secret_key + api_key
  //   const hash_string = md5(hash_key)
  //   const [marvelData, setMarvelData] = useState([])
  //   const limit = 5
  //   const charsearch = "Iron20%Man"

  //   axios.get`https://gateway.marvel.com:443/v1/public/comics?title=${charsearch}&orderBy=onsaleDate&limit=${limit}&ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`()
  //     .then(res => {
  //       // console.log(res.data.data.results)
  //       // console.log(Object.keys(res.data.data.results[0]))
  //       setMarvelData(res.data.data.results)
  //       console.log(marvelData)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  //   return (
  //     // Might remove the [0]
  //     // <img src={SilverSurfer}></img>
  //     <div class="row">
  //       <div class="column">
  //         <ul>
  //           {marvelData.map((record, index) => {
  //             return (
  //               <li>
  //                 <p>{record.title}</p>

  //                 <img src={record.image.path}></img>
  //               </li>
  //             )
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }

  // AllComics.propTypes = {
  //   children: PropTypes.node.isRequired,
  // }
  // export default AllComics
  // API SERVICE ???????????????????????????????????????????????????????????????????????????
  // API SERVICE ???????????????????????????????????????????????????????????????????????????
  // API SERVICE ???????????????????????????????????????????????????????????????????????????

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

  const Iron = () => {
    console.log(choice)
    choice = 4
    // e.preventDefault()
    console.log("Click Iron Man")
    console.log(choice)
    // console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
  }
  const Doom = () => {
    console.log(choice)
    choice = 3
    // e.preventDefault()
    console.log("Click Dr Doom")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
  }
  const Thane = () => {
    console.log(choice)
    choice = 2
    // e.preventDefault()
    console.log("Click Thanos the mad titan")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
  }
  const Sliver = () => {
    console.log(choice)
    choice = 1
    // e.preventDefault()
    console.log("Click Silver surfer.")
    console.log(choice)
    console.log(selectedChar)
    setSelectedChar(Charsetter(choice))
  }

  // const selectedChar = "Yo"
  // choice === 1
  //   ? "Silver Surfer"
  //   : choice === 2
  //   ? "Thanos"
  //   : choice === 3
  //   ? "Dr Doom"
  //   : choice === 4
  //   ? "Iron Man"
  //   : "No character Selected"

  const Charsetter = choice => {
    if (choice === 1) {
      // this.state.selectedChar = "Silver Surfer"
      // setSelectedChar("Silver Surfer")
      return "Comics featuring the Silver Surfer"
    }
    if (choice === 2) {
      // this.state.selectedChar = "Thanos"
      // setSelectedChar("Thanos")
      return "Comics featuring The Mad Titan Thanos"
    }
    if (choice === 3) {
      // this.state.selectedChar = "Dr Doom"
      // setSelectedChar("Dr Doom")
      return "Comics featuring Dr Doom"
    }
    if (choice === 4) {
      // this.state.selectedChar = "Iron Man"
      // setSelectedChar("Iron Man")
      return "Comics featuring Iron Man"
    } else {
      // this.state.selectedChar = "No character Selected"
      // setSelectedChar("No character Selected")
      return "No character Selected"
    }
  }

  const CharInfo = () => <h2>{selectedChar}</h2>

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
          <p>This is where we put a gallery</p>

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
            <div class="columner">
              <img src={IronManComic}></img>       
            </div>
          </div>
        </div>
        <div class="column">
          <h2>{IssueName}</h2>
          <div class="babycolumn">
            <img src={IronManComic}></img>
          </div>
          <div class="babycolumn" style={{ backgroundColor: "#e0e0e0" }}>
             <h3>Detailed information</h3>
            <br></br>    
            <p>
              <b>Date on sale:</b> {Description.SaleDate}
              <br></br>
              <b>Final cut off order date:</b> {Description.CutoffDate}
              <br></br>
              <b>Unlimited date:</b> {Description.UnlimitedDate}
              <br></br>
              <b>Digital purchase date:</b> {Description.DigitalDate}
              <br></br>
              <b>Writer:</b> {Description.Writer}
              <br></br>
              <b>Penciller:</b> {Description.Penciller}
              <br></br>
              <b>Letterer:</b> {Description.Letterer}
              <br></br>
              <b>Summary:</b>
            </p>
            <p> {Description.Summary}</p>
            <APIgetter></APIgetter>
                    
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
