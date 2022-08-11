import { personalDetails } from '../../data/PersonalDetails'

const style = {
  wrapper: `w-full mx-auto py-4 text-white h-auto bg-blue flex justify-center items-center`,
  line: `w-96 border-violet`,
  text:`mx-3 mx-6 text-7xl font-light`,
  emoji: `mx-2 animate-pulse`,
}

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <hr className={style.line} />
      <p className={style.text}>
        Made with
        <span role='img' className={style.emoji}>
          ❤️
        </span>
        by {personalDetails.name}
      </p>
      <hr className={style.line} />
    </div>
  )
}

export default Footer
