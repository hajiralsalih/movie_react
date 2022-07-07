import React, { useState } from 'react';
import Modal from 'react-modal';

import Rate from '../Rate';

import './AddMovie.css';

Modal.setAppElement('#root');

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
//  
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
//  
  // 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      name,
      // 
      rating,
      image,
      // 
  //  
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setName('');
  // 
    setRating('');
    setImage('');
  //  
  // 
  };

  return (
    <div>
      <button className="Add-btn" onClick={openModal}>Add New Movie </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add New Movie ...</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
              <Rate rating={rating} setRatingSearch={setRating} />
            </div>
           
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
           
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Add
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
  );
};

export default AddMovie;
