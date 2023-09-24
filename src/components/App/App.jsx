import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
//Imports the GallerList component
import GalleryList from '../GalleryList/GalleryList';

function App() {
  //State used for the gallery list and image descriptions
  const [galleryList, setGalleryList] = useState ([]);
  const [showDescription, setShowDescription] = useState(null); 


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

//Axios PUT route for likes
const addLike = (id) => (
  axios
  .put(`/gallery/like/${id}`)
  .then((response) => {
    fetchGallery(); // Refresh the list after updating
  })
  .catch((err) => {
    alert("Error Marking image as liked");
    console.log(err);
  })); 



  //Set up for the DOM and passed props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} addLike={addLike} setShowDescription={setShowDescription} showDescription={showDescription} />
      </div>
    );
    }

export default App;
