import React from 'react'
import {HorizontalScroll} from './HorizontalScroll'
export const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises
}) => {
  return (
    <div>
      <p className='text-3xl font-semibold border border-b-primary border-b-4 inline-block p-3 mb-10'>
        Similar <span className='text-primary'>Target Muscle</span> exercises
      </p>
      <div className='flex w-full '>
        <HorizontalScroll data={targetMuscleExercises} />
      </div> 
      <p className='text-3xl font-semibold border border-b-primary border-b-4 inline-block p-3 mb-10'>
        Similar <span className='text-primary'>Equipment</span> exercises
      </p>
      <div className='flex '>
        <HorizontalScroll data={equipmentExercises} />
      </div>
    </div>
  )
}
