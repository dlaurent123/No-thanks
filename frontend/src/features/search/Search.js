import React, {useState, useInput, useEffect} from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {recieveSearch} from "../search/searchSlice"

const Search = () => {
const API_KEY = process.env.API_Key
const [location, setLocation] = useState("")
const dispatch = useDispatch()
console.log(location)
const handleSubmit = async (e) =>{
  e.preventDefault()
  try{
    let res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`,{
      headers:{
        Authorization:
        "Bearer" + " " 
        + `${API_KEY}`
  
      },
      
    }
   
    )
    dispatch(recieveSearch(res.data.businesses))
    debugger
  }catch(err){
    console.log(err)
  }

}



  return (
    <form onSubmit={handleSubmit}>
      <input className="location" value={location} placeholder="Search by Zip Code" onChange={(e) => setLocation(e.currentTarget.value)} />
      <button>Submit</button>
    </form>
  );
};

export default Search;
