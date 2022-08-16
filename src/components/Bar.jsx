import { useState } from 'react'
import Social from './Social'
import Section from './Section'
import Stack from './Stack'
import ContentSectionProjects from './ContentSectionProjects'

const Bar = () => {
  const [typeSelected, setTypeSelected] = useState('briefcase')
  const [technologie, setTechnologie] = useState('')

  return (
    <>
      <div className='flex'>
        <div className="bg-zinc-900 w-16 h-screen flex flex-col justify-between">
          <div>
            <Section type={'user'} typeSelected={typeSelected} setTypeSelected={setTypeSelected}/>
            <Section type={'briefcase'} typeSelected={typeSelected} setTypeSelected={setTypeSelected}/>
          </div>
          <Social />
        </div>
        {
          typeSelected === 'briefcase' ? <Stack technologie={technologie} setTechnologie={setTechnologie}/> : <div></div>
        }
      </div>
      {
        typeSelected === 'briefcase' 
          ? <ContentSectionProjects technologie={technologie}/> 
          : <div></div>
      }
      
    </>
  )
}

export default Bar;