import * as logos from '../assets/logos'

const ProjectCard = ({ name, description, image, github, web, postman, technologies }) => {
  return (
    <div className='flex shadow-lg rounded-md overflow-hidden m-2 h-60'>
      <div className='w-56 bg-zinc-900 flex justify-center items-center'>
        <img src={logos.nestjs} alt='' />
      </div>
      <div className='w-96 bg-zinc-900 p-4 flex flex-col justify-between'>
        <h2 className='text-4xl font-bold text-white'>{name}</h2>
        <div className='h-28 overflow-hidden'>
          <p className='text-lg text-white'>{description}</p>
        </div>
        <ButtonsLinksProjects postman={postman} github={github} web={web}/>
      </div>
    </div>
  )
}

const ButtonsLinksProjects = ({ postman, github, web }) => {
  const classButton = 'flex items-center bg-white px-1.5 py-0.5 mx-1.5 w-fit rounded-lg hover:bg-slate-100'

  return (
    <div className='flex'>
      { 
        github && <a href={github} target='_blank' rel='noopener noreferrer'
          className={classButton}>
          <i className='fa-brands fa-github text-1xl'/>
          <p className='text-1xl font-medium pl-1'>GitHub</p>
        </a>
      }
      {
        postman && <a href={postman} target='_blank' rel='noopener noreferrer'
          className={classButton}>
          <img src={logos.postman} alt='logo-postman' width='18px'/>
          <p className='text-1xl font-medium pl-1 text-orange-600'>Postman</p>
        </a>
      }
      {
        web && <a href={postman} target='_blank' rel='noopener noreferrer'
          className={`${classButton} bg-sky-500 hover:bg-sky-600`}>
          <i className='fa-solid fa-earth-americas text-1xl text-white'></i>
          <p className='text-1xl font-medium pl-1 text-white'>Web</p>
        </a>
      }
    </div>
  )
}

export default ProjectCard;