import React, { useState, useEffect } from "react"
import SilverSurfer from "../images/silversurfer.jpg"
import PropTypes from "prop-types"
import axios from "axios"
import md5 from "md5"

// import request from "request"

const APIgetter = ({ children }) => {
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

  useEffect(() => {
    axios
      // .get(
      //   `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`
      // )
      .get
      //   `https://gateway.marvel.com:443/v1/public/comics?title=Iron%20Man&orderBy=onsaleDate&limit=${limit}&ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`
      ()
      .then(res => {
        // console.log(res.data.data.results)

        console.log(Object.keys(res.data.data.results[0]))
        setMarvelData(res.data.data.results)
        console.log(marvelData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <ul>
      {marvelData.map((record, index) => {
        return (
          <li>
            {record.issueNumber + "-" + record.title}
            <div class="row">
              <div class="column">
                <img src={SilverSurfer}></img>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

APIgetter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default APIgetter
