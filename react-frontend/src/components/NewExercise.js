import React, { useState } from 'react';

const NewExercise = () => {
    const [name, setName] = useState('')
    const [muscle_group, setMuscleGroup] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [rest, setRest] = useState('')

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handleMuscleGroupChange = (e) => {
      setMuscleGroup(e.target.value);
    }
    const handleWeightChange = (e) => {
      setWeight(e.target.value);
    }
    const handleSetsChange = (e) => {
      setSets(e.target.value);
    }
    const handleRepsChange = (e) => {
      setReps(e.target.value);
    }
    const handleRestChange = (e) => {
      setRest(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();   

    fetch('http://localhost:9292/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, muscle_group,weight,sets,reps,rest}),
    })
    .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setName('');
        setMuscleGroup('');
        setWeight('');
        setSets('');
        setReps('');
        setRest('')
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error if needed
      });
    }

      return (
        <div className='add-new-exercise'>
            <h2>Add new exercise</h2>
            <form onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" value={name} onChange={handleNameChange} />
                <label >Muscle Group</label>
                <input type="text" value={muscle_group} onChange={handleMuscleGroupChange} />
                <label >Weight</label>
                <input type="text" value={weight} onChange={handleWeightChange} />
                <label >Sets</label>
                <input type="text" value={sets} onChange={handleSetsChange} />
                <label >Reps</label>
                <input type="text" value={reps} onChange={handleRepsChange} />
                <label >Rest</label>
                <input type="text" value={rest} onChange={handleRestChange} />
            </form>
        </div>
      )
    

  }
  export default NewExercise;