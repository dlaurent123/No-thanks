import React, {useState, useInput, useEffect} from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {receiveSearch} from "../search/searchSlice"

const Search = () => {
const API_KEY = process.env.API_KEY
const [location, setLocation] = useState("")
const [term, setTerm] = useState("")
const[latitude, setLatitude] = useState("")
const[longitude, setLongitude] = useState("")
const dispatch = useDispatch()
console.log(location)
const handleSubmit = async (e) =>{
  e.preventDefault()
  try{
    let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,{
      headers:{
        Authorization:
        "Bearer" + " " 
        + "5WZsGjXG75mAeIo30zOWJ2XRbGH-SfFe5D5YowXKQ_a5fwyQI1-1w0lsDotYUs9VYMzBYJ24E5EfzA4XdFca4nrWrm9zKacT2Bcn1cGonrRPlWWQaMvg_aqCNEXtXnYx"
  
      },
      
    }
   
    )
    dispatch(receiveSearch(res.data.businesses))
    debugger
  }catch(err){
    console.log(err)
  }

}

const searchLocation = async()=>{ 
  try{
    navigator.geolocation.getCurrentPosition(async(position)=>{
      let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,{
        headers:{
          Authorization:
          "Bearer" + " " + "5WZsGjXG75mAeIo30zOWJ2XRbGH-SfFe5D5YowXKQ_a5fwyQI1-1w0lsDotYUs9VYMzBYJ24E5EfzA4XdFca4nrWrm9zKacT2Bcn1cGonrRPlWWQaMvg_aqCNEXtXnYx"
        }
      })
      dispatch(receiveSearch(res.data.businesses))
      debugger
  })
  }catch(err){
    console.log(err)
  }
   
}

  return (
    <form onSubmit={handleSubmit}>
      <input className="categories" value={term} placeholder="Search By Category" onChange={(e) => setTerm(e.currentTarget.value)} />
      <input className="location" value={location} placeholder="Search by Zip Code" onChange={(e) => setLocation(e.currentTarget.value)} />
      <button>Submit</button>
      <h1>or search by location</h1>
      <button onClick={searchLocation}>Search By Location</button>

    </form>
  );
};

export default Search;
