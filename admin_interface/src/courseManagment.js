import React, { useState } from 'react';
import axios from 'axios';

const CourseManagement = ({ courseId }) => {
  const [updateData, setUpdateData] = useState({});
  const [file, setFile] = useState(null);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/courses/${courseId}`, updateData);
      console.log('Course updated:', response.data);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/courses/${courseId}`);
      console.log('Course deleted:', response.data);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`/api/courses/${courseId}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="course-management">
      <h2>Course Management</h2>
      <div>
        <input
          type="text"
          placeholder="Update Course Data"
          onChange={(e) => setUpdateData({ ...updateData, [e.target.name]: e.target.value })}
        />
        <button onClick={handleUpdate}>Update Course</button>
      </div>
      <div>
        <button onClick={handleDelete}>Delete Course</button>
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Photo</button>
      </div>
    </div>
  );
};

export default CourseManagement;
