import React from 'react'
import { Link } from 'react-router-dom'
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <div className='border-t-4 border-primary p-5 bg-white '>
        <img src={exercise.gifUrl} alt={exercise.name} />

        <div className='flex gap-4 items-center bg-white'>
          <div className='bg-[#fdaab3] text-white text-sm capitalize font-semibold rounded-full px-3 py-2  '>
            {exercise.bodyPart}
          </div>
          <div className='bg-[#f6c762] text-white text-sm capitalize font-semibold rounded-full px-3 py-2 '>
            {exercise.target}
          </div>
        </div>
        <div className='my-3 font-bold text-2xl'>{exercise.name}</div>
      </div>
    </Link>
  )
}

export default ExerciseCard
