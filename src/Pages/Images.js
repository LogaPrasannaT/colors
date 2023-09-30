import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/images.css'

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className='album'>ALBUM.ID : {image.albumId} </div>
              <div className='id'> ID: {image.id} </div>
              <div className='title'> TITLE: {image.title} </div>
              <div className='thumbnail'>THUMBNAIL : {image.thumbnailUrl}</div>
              <img src={image.url} className="card-img-top" alt={`Image ${index}`} />
              
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
