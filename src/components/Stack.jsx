import { technologyCategories } from '../data/technologies'
import CategoryTechnology from './CategoryTechnology'


const Stack = ({ technologie, setTechnologie }) => {
  return (
    <div className='bg-zinc-900 w-96 h-screen px-2 py-5 overflow-y-auto'>
      <h2 className='text-2xl font-sans text-zinc-500 ml-4 mt-2 mb-6'>TECHNOLOGIES</h2>
      {
        Object.entries(technologyCategories).map(([key, value]) => (
          <CategoryTechnology key={key} name={key} listTechnologies={value} technologie={technologie} setTechnologie={setTechnologie}/>
        ))
      }
      
    </div>
  )
}

export default Stack;