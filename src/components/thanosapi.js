import React, { useState } from "react"
import SilverSurfer from "../images/silversurfer.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import axios from "axios"
import md5 from "md5"
import "../styles/global.css"

// import request from "request"

const ThanosAPI = ({ children }) => {
  //   const md5 = import("md5")
  //   const request = import("request")
  //   const api_key = "11bc117d9a1b6b94e6f0ac7bdb36f2a6"
  const api_key = "14e78f65cc59325dadf4118e889a89fe"
  //   const secret_key = "fe9782be64504bb8fca885e687938508268400a5"
  const secret_key = "6b7c3edc5d29dc559e57853ffd35f0aa543d600b"
  const timestamp = Date.now()

  const hash_key = timestamp + secret_key + api_key
  const hash_string = md5(hash_key)

  const [marvelData, setMarvelData] = useState([])
  const limit = 5

  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/comics?title=Thanos&orderBy=onsaleDate&limit=${limit}&ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`
    )
    .then(res => {
      // console.log(res.data.data.results)

      // console.log(Object.keys(res.data.data.results[0]))
      setMarvelData(res.data.data.results)
      console.log(marvelData)
    })
    .catch(err => {
      console.log(err)
    })

  return (
    <ul>
      {marvelData.map((record, index) => {
        return (
          <li>
            <div class="babycolumn" style={{ backgroundColor: "#e0e0e0" }}>
              <h3>Detailed information</h3>
              <br></br>

              <p>
                <b>Date on sale:</b> {record.title}
                <br></br>
                <b>Final cut off order date:</b> {record.title}
                <br></br>
                <b>Unlimited date:</b> {record.title}
                <br></br>
                <b>Digital purchase date:</b> {record.title}
                <br></br>
                <b>Writer:</b> {record.title}
                <br></br>
                <b>Penciller:</b> {record.title}
                <br></br>
                <b>Letterer:</b> {record.title}
                <br></br> <b>Summary:</b>
              </p>

              <p> {record.title}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

ThanosAPI.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThanosAPI
