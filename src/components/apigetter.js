import React from "react"
import PropTypes from "prop-types"
import md5 from "md5"
import request from "request"

const APIgetter = ({ children }) => {
  //   const md5 = import("md5")
  //   const request = import("request")
  const api_key = "11bc117d9a1b6b94e6f0ac7bdb36f2a6"
  const secret_key = "fe9782be64504bb8fca885e687938508268400a5"
  const timestamp = new Date()

  const hash_key = timestamp + secret_key + api_key
  const hash_string = md5(hash_key)

  //   Version 1
  //   request(
  //     `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${api_key}&hash=${hash_string}`,
  //     {
  //       json: true,
  //     },
  //     (err, res, body) => {
  //       //   console.log("body")
  //       console.log(body.data.results)
  //     }
  //   )

  //   version 2 ajax
  fetch(
    "http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${api_key}&hash=${hash_string}"
  )
    .then(response => response.json())
    .then(data => console.log(data))

  return (
    <>
      <p>Hello there, this is {body.data.results} </p>
    </>
  )
}

APIgetter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default APIgetter
