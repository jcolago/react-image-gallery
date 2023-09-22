import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [galleryList, setGalleryList] = useState ([]);

  //Runs fetchGallery on page load
  useEffect(()=> {
    fetchGallery()},
    []
  );
//Axios Get to get the image array
  const fetchGallery = () => 
  axios. get('/gallery')
    .then(response => {
      setGalleryList(response.data)
    })
    .catch(err => {
      alert('Error in fetching images');
      console.log(err)
    });

    
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
