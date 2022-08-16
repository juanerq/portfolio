import { useState } from "react"
import Technology from "./Technology"

const CategoryTechnology = ({ name, listTechnologies, technologie, setTechnologie }) => {
  const [open, setOpen] = useState(false)
  const rotateArraw = open ? 'origin-center rotate-90' : ''

  const handleClick = () => setOpen(!open)

  return (
    <>
      <div className='flex items-center h-6 my-1 cursor-pointer relative' 
        onClick={handleClick}>
        <i className={`fa-solid fa-angle-right text-zinc-400 text-xl mr-3 ${rotateArraw}`}></i>
        <h2 className='text-xl font-medium text-zinc-500'>{name.toUpperCase()}</h2>
      </div>
      {
        open && <div className='my-2'>
        {
          listTechnologies.map(e => <Technology key={e.name} {...e} technologie={technologie} setTechnologie={setTechnologie} />)
        }
      </div>
      }
    </>
  )
}

export default CategoryTechnology