import axios from 'axios';
import React, { useState, useEffect } from 'react';
import App from './App';

const Info = () => {

const [info, setInfo] = useState([])
   

useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(resp => {
        setCharacters(resp.data)
    }).catch(err => {
      console.error(err);
    })
  
  }, [])






return (
        <p>
            {info.age}
        </p>
    )
}

export default Info
