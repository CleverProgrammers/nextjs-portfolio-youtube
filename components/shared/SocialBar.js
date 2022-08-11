import { SocialIcon } from 'react-social-icons'
import { personalDetails } from '../../data/PersonalDetails'

const style = {
  wrapper: `fixed left-3 md:left-5 bottom-0 z-30`,
  iconsContainer:`flex flex-col justify-center items-center `,
  line: `h-20 md:h-32 mt-2 w-1/12 bg-violet`,
}

const SocialBar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconsContainer}>
        {personalDetails.socialMedia.map((item, id) => {
          return (
            <SocialIcon fgColor='#B8C1EC' bgColor='none' url={item} key={id} />
          )
        })}
        <div className={style.line} />
      </div>
    </div>
  )
}
export default SocialBar
