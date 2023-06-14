import React from 'react'
import BodyPart from './BodyPart'
import RightArrowICon from '../assets/icons/right-arrow.png'
import LeftArrowICon from '../assets/icons/left-arrow.png'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard'
export const HorizontalScroll = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart
}) => {
  function LeftArrow () {
    const { scrollPrev } = React.useContext(VisibilityContext)
    return (
      <div onClick={() => scrollPrev()}>
        <img src={LeftArrowICon} alt='LeftArrowICon' />
      </div>
    )
  }

  function RightArrow () {
    const { scrollNext } = React.useContext(VisibilityContext)
    return (
      <div onClick={() => scrollNext()}>
        <img src={RightArrowICon} alt='RightArrowICon' />
      </div>
    )
  }

  return (
    <ScrollMenu
      as='div'
      className='flex justify-center items-center'
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data.map((item, index) => (
        <>
          {bodyParts ? (
            <BodyPart
              key={index}
              title={item}
              itemId={index}
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}{' '}
        </>
      ))}
    </ScrollMenu>
  )
}
