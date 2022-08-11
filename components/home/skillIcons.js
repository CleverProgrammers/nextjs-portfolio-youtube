import Image from 'next/image'
import { technologies } from '../../data/Technologies'

const style = {
  wrapper:`flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6`,
  iconContainer:`p-6 h-32 w-40`,
  icon:`object-contain`
}

const SkillIcons = () => {
  return (
    <div className={style.wrapper}>
      {technologies.map(({ src, name }, id) => {
        return (
          <div key={id} className={style.iconContainer}>
            <Image
              src={src}
              alt={name}
              height={100}
              width={100}
              className={style.icon}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SkillIcons
