import { React } from 'react'
import icon from '../assets/icons/gym.png'
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
      className='flex flex-col items-center justify-center  sm:translate-y-[50%] sm:w-[330px] sm:h-[130px] w-[270px] h-[280px] sm:p-4 border-t-4 border-t-primary cursor-pointer  mx-3 text-center '
    >
      <img
        className='mb-4 w-[60px] h-[60px]  '
        src={icon}
        alt='icon'
      />
      <p className='font-semibold text-xl'>{item}</p>
    </div>
  )
}

export default BodyPart
