const section = {
  user: {
    icon: 'fa-solid fa-user',
    path: '/user'
  },
  briefcase: {
    icon: 'fa-solid fa-briefcase',
    path: '/briefcase'
  }
}

const Section = ({ type, typeSelected, setTypeSelected }) => {
  const classSelected = typeSelected === type 
    ? 'border-l-zink-200 text-zinc-200' 
    : 'border-l-zinc-900 text-zinc-500'

  const handleClick = () => {
    setTypeSelected(type)
  }

  if(!section[type]) throw new Error('Section type not found')
  const { icon, path } = section[type]

  return (
    <div className={` h-16 flex justify-center items-center cursor-pointer border-l-2 ${classSelected} hover:text-zinc-200`}
      onClick={handleClick}>
        <i className={`text-2xl ${icon}`}></i>
    </div>
  )
}

export default Section;