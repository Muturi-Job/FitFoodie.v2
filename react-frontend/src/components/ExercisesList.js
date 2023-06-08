import React from 'react';
import ExerciseCard from './ExercisesCard';

const ExerciseList = ({exercises}) => {
    return (
        <div>
              {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exerciseId={exercise.id} />
      ))}
        </div>
    );
};
export default ExerciseList;