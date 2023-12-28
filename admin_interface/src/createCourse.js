import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    imageUrl: '',
  });

  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/courses', formData)
      .then(response => {
        console.log('Course created:', response.data);
        setMessage('Course created successfully!');
        // Clear form data after successful submission
        setFormData({ title: '', price: '', imageUrl: '' });
      })
      .catch(error => {
        console.error('Error creating course:', error);
        setMessage('Error creating course. Please try again.');
      });
  };

  return (
    <div>
      <h1>Create New Course</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
