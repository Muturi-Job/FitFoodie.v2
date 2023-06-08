import React from 'react';
import { useState, useEffect } from 'react';
import NewExercise from './NewExercise';
import ExerciseList from './ExercisesList';

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/exercises')
      .then((res) => res.json())
      .then((data) => {
        setExercises(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  
  
  return (
    <>
    <NewExercise />
    <div>
      <h4>EXERCISES LIST</h4>
      <ExerciseList exercises={exercises} />
    </div>
    </>
    
  );
}
