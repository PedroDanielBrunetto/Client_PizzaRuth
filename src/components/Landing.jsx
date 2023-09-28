import Pizza from '../assets/pizza.png'
import Best from '../assets/text_amelhorpizza.png'

export default function Landing(){
  return(
    <div className="flex md:flex-col md:gap-3 items-center justify-around p-10">
      <img src={Best} className='w-[486px]'/>
      <img src={Pizza} className='w-96 md:mt-20'/>
    </div>
  )
}