const TextCards = ({ text, heading, color }) => {
  const style = {
    wrapper: `bg-${color} w-64 h-auto rounded-lg p-6 transition-all duration-300 transform hover:scale-105 ${
      heading === 'Apps' && 'ml-[10rem]'
    }`,
    title: `underline mb-2 font-semibold text-6xl`,
    description: ` font-normal text-7xl`,
  }

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{heading}</div>
      <div className={style.description}>{text}</div>
    </div>
  )
}

export default TextCards
