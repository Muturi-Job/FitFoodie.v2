import React, { useState, useEffect } from 'react';

const ExerciseCard = ({exerciseId}) => {
  const [exercise, setExercise] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedMuscleGroup, setUpdatedMuscleGroup] = useState('');
  const [updatedWeight, setUpdatedWeight] = useState('');
  const [updatedSets, setUpdatedSets] = useState('');
  const [updatedReps, setUpdatedReps] = useState('');
  const [updatedRest, setUpdatedRest] = useState('');

  useEffect(() => {
    fetch(`http://localhost:9292/exercises/${exerciseId}`)
    .then((res) => res.json())
    .then((data) => {
      setExercise(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [exerciseId]);

const handleDelete = () => {
  // Send a DELETE request to the API endpoint
  fetch(`http://localhost:9292/exercises/${exerciseId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
const handleUpdate = () => {
  fetch(`http://localhost:9292/exercises/${exerciseId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      { name: updatedName,
        muscle_group :updatedMuscleGroup,
        weight: updatedWeight,
        sets: updatedSets,
        reps: updatedReps,
        rest: updatedRest
      }
      ),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      setIsEditing(false)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
const handleNameChange = (event) => {
  setUpdatedName(event.target.value)
}
const handleMuscleGroupChange = (event) => {
  setUpdatedMuscleGroup(event.target.value)
}
const handleWeightChange = (event) => {
  setUpdatedWeight(event.target.value)
}
const handleSetsChange = (event) => {
  setUpdatedSets(event.target.value)
}
const handleRepsChange = (event) => {
  setUpdatedReps(event.target.value)
}
const handleRestChange = (event) => {
  setUpdatedRest(event.target.value)
}


if (!exercise) {
  return <div>Loading...</div>;
}

return (
  <div>
    {isEditing ? (
      <div>
        <label >Name</label>
        <input type="text" value={updatedName} onChange={handleNameChange} />
        <label >Weight</label>
        <input type="integer" value={updatedWeight} onChange={handleWeightChange} />
        <label >Sets</label>
        <input type="integer" value={updatedSets} onChange={handleSetsChange} />
        <label >Muscle Group</label>
        <input type="text" value={updatedMuscleGroup} onChange={handleMuscleGroupChange} />
        <label >Reps</label>
        <input type="integer" value={updatedReps} onChange={handleRepsChange} />
        <label >Rest</label>
        <input type="integer" value={updatedRest} onChange={handleRestChange} />

        <button onClick={handleUpdate}>Save</button>
      </div>
    ) : (
      <div>
        <h2>{exercise.name}</h2>
        <p>Muscle Group: {exercise.muscle_group}</p>
        <p>Weight:{exercise.weight} Kgs</p>
        <p>Sets: {exercise.sets} </p>
        <p>Reps: {exercise.reps} </p>
        <p>Rest: {exercise.rest} </p>
        <p>User ID: {exercise.user_id} </p>


        <button onClick={() => setIsEditing(true)}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )}
  </div>
);
    }

export default ExerciseCard;
