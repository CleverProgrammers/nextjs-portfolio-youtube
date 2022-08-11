import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button } from '../shared'
import { personalDetails } from '../../data/PersonalDetails'

const Hero = () => {
  const style = {
    wrapper: `grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16`,
    container: `col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center`,
    triangleContainer: `items-center w-3/4 -mt-10 relative`,
    triangle: `hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin`,
    name: `text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3`,
    about: `text-7xl font-light text-violet text-justify`,
    skills: `flex flex-col md:flex-row gap-4 mt-6`,
    imageContainer: `hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end `,
    profileImg: `ml-auto w-100 lg:w-4/5 pointer-events-none text-right`,
  }
  const router = useRouter()

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.triangleContainer}>
            <div className={style.triangle}>
              <Image
                src='/images/vectors/triangle.svg'
                alt='Triangle 3d Vector'
                height={100}
                width={100}
              />
            </div>

            <h1 className={style.name}>{personalDetails.name}</h1>

            <h5 className={style.about}>{personalDetails.about}</h5>

            <div className={style.skills}>
              <Button
                type='solid'
                text='Know More'
                onClickHandler={() => router.push('#skills')}
              />
              <Button
                type='outlined'
                text='Resume'
                onClickHandler={() =>
                  window.open(personalDetails.resume, '_blank')
                }
              />
            </div>
          </div>
        </div>

        <div className={style.imageContainer}>
          <div className={style.profileImg}>
            <Image
              src={personalDetails.profile_img}
              alt='Profile Image'
              height={900}
              width={700}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
