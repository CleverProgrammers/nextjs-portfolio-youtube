import Image from 'next/image'
import Details from '../shared/details'
import { companyDetails } from '../../data/Work'

const style = {
  wrapper: `ml-4 md:mx-16 grid grid-cols-12 gap-4 h-full place-items-center items-center`,
  textContainer: `col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center`,
  leftAlign: `items-center w-3/4 relative`,
  title: `mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none `,
  logosWrapper: `col-span-12 md:col-span-5 lg:col-span-6 grid grid-cols-3 gap-4 lg:gap-14 my-10 sm:mt-0 items-center`,
  logoContainer: `w-24`,
  logo: `object-contain`,
}

const Experience = () => {
  return (
    <div>
      <div className = {style.wrapper}>
        <div className = {style.textContainer}>
          <div className = {style.leftAlign}>
            <h1 className = {style.title}>
              Work <span className = 'text-pink'>Experience.</span>
            </h1>
          </div>
        </div>

        <div className = {style.logosWrapper}>
          {companyDetails.map(
            (company, index) =>
              company.logo_url && (
                <div className = {style.logoContainer} key = {index}>
                  <Image
                    src = {company?.logo_url}
                    alt = {company.name}
                    key = {index}
                    height = {100}
                    width = {100}
                    className = {style.logo}
                  />
                </div>
              ),
          )}
        </div>
      </div>

      <Details companyDetails = {companyDetails}/>
    </div>
  )
}

export default Experience
