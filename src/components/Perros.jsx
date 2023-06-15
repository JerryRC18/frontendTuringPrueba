import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Perros = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchRandomImages = () => {
    axios.get('https://dog.ceo/api/breeds/image/random/4')
      .then(response => {
        setImageUrls(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const handleImageChange = (index) => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        const newImageUrls = [...imageUrls];
        newImageUrls[index] = response.data.message;
        setImageUrls(newImageUrls);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="my-[17%]">
      <div className="flex flex-wrap justify-center">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="bg-[#154360] p-4 rounded-lg m-2 flex items-center">
            <img src={imageUrl} alt={`Dog ${index + 1}`} className="w-48 h-48" />
            <button
              onClick={() => handleImageChange(index)}
              className="bg-[#00df9a] text-white px-4 py-2 ml-4 rounded-md"
            >
              Cambiar imagen
            </button>
            
          </div>
          
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={fetchRandomImages}
          className="bg-[#00df9a] text-white px-4 py-2 rounded-md"
        >
          Mostrar otras 4 fotos
        </button>
      </div>
    </div>
  );
};

export default Perros;
