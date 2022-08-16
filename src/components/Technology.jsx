import { searchNumOfProjects } from '../helpers/utils'

const Technology = ({ name, image, technologie, setTechnologie }) => {
  const classColorSelected = technologie === name ? 'bg-zinc-800' : ''
  const colorTitle = technologie === name ? 'text-yellow-300' : 'text-zinc-200'

  const numProjects = searchNumOfProjects(name)

  const handleClick = () => {
    if(numProjects > 0) {
      setTechnologie(technology => technology !== name ? name : '')
    }
  }

  return (
    <div className={`h-20 ${classColorSelected} flex cursor-pointer hover:bg-zinc-800`}
      onClick={handleClick}>
      <div className='w-20 h-20 flex justify-center items-center'>
        <img alt='JavaScript' height='50' width='50' src={image}/>
      </div>
      <div className='p-2 w-4/5'>
        <div className='flex justify-between items-center'>
          <h2 className={`${colorTitle} font-medium`}>{name}</h2>
          {
            numProjects > 0 && 
            <div className='flex items-center'>
              <i className='fa-solid fa-star text-amber-500 text-sm'></i>
              <p className='text-zinc-200 text-sm ml-1'>{numProjects}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Technology