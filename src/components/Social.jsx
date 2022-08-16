const Social = () => {
  const classConatler = 'text-zinc-500 h-16 flex justify-center items-center cursor-pointer text-3xl hover:text-zinc-200'

  return (
    <div>
      <a href='https://github.com/juanerq' className={`${classConatler} fa-brands fa-github`} target='_blank' />
      <a href='https://www.linkedin.com/in/juanerq' className={`${classConatler} fa-brands fa-linkedin`} target='_blank' />
    </div>
  )
}

export default Social;