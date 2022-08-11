import Image from 'next/image'
import Experience from './experience'
import { personalDetails } from '../../data/PersonalDetails'

const style = {
  wrapper: `py-20 `,
  content: `ml-4 md:mx-16 grid grid-cols-12 gap-4 place-items-center`,
  textContainer: `col-span-6 flex flex-col justify-center items-center`,
  leftAlign: `items-center w-3/4 relative`,
  blockVector: `block absolute w-52 opacity-60`,
  subtitle: `my-[1rem] text-4xl text-white leading-7`,
  pinkAccent: `text-pink font-bold`,
  jobTitle: `my-[2rem] text-1xl font-extrabold text-white leading-none`,
  arrowVectorContainer: `ml-96 transform-all animate-translateright`,
  companyLogoContainer: `w-[20rem] h-[20rem] col-span-6 flex flex-col items-center justify-center`,
  companyLogo: `object-contain`,
  experienceContainer: `relative py-20`,
}

const Work = () => {
  return (
    <div className={style.wrapper} id='work'>
      <div className={style.content}>
        <div className={style.textContainer}>
          <div className={style.leftAlign}>
            <Image
              src='/images/vectors/boxes.svg'
              alt='Box Vector'
              height={100}
              width={100}
              className={style.blockVector}
            />

            <h1 className={style.subtitle}>
              Currently working at{' '}
              <span className={style.pinkAccent}>
                {personalDetails.work.company}
              </span>{' '}
              as
            </h1>

            <h1 className={style.jobTitle}>
              {personalDetails.work.designation}
            </h1>

            <div className={style.arrowVectorContainer}>
              <Image
                src='/images/vectors/arrows-right.svg'
                alt='Next'
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>

        <div className={style.companyLogoContainer}>
          <img
            src={personalDetails.work.logo}
            alt='Works at'
            className={style.companyLogo}
          />
        </div>
      </div>

      <div className={style.experienceContainer}>
        <Experience />
      </div>
    </div>
  )
}

export default Work
