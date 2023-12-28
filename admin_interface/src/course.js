import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError('Erreur lors de la récupération des cours. Veuillez réessayer.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Tous les Cours</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <strong>{course.title}</strong> - {course.description}<br />
            Prix : {course.price} | URL : {course.imageUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
