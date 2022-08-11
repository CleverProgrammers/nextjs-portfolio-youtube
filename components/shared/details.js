import { useEffect, useState } from 'react'
import CompanyDetails from '../work/company-details'

const Details = ({ companyDetails }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  let numbering = 0
  useEffect(() => {}, [activeIndex])

  const style = {
    wrapper: `ml-4 md:mx-16 grid grid-cols-12 gap-4 place-items-center`,
    content: `col-span-6 flex flex-col px-10 py-5`,
    numbering: `text-1xl font-black text-white -mb-10 `,
    detailsContainer: `col-span-6 flex flex-col justify-center items-center min-h-full`,
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {companyDetails.map((company, index) => {
          if (company.featured) {
            numbering += 1
            return (
              <div key={company.name}>
                <h1 className={style.numbering}>
                  {numbering >= 0 && numbering <= 9
                    ? `0${numbering - 1}`
                    : `${numbering - 1}`}
                </h1>
                <button
                  className={`${
                    activeIndex === index
                      ? 'bg-pink border-transparent'
                      : 'border-pink text-white'
                  } border-2 rounded-xl px-10 py-4 text-center z-30 w-96 transition-all hover:shadow-light-xl hover:outline-none active:outline-none focus:outline-none`}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                  type='button'
                >
                  {company.name}
                </button>
              </div>
            )
          }
        })}
      </div>
      <div className={style.detailsContainer}>
        <CompanyDetails activeCompany={companyDetails[activeIndex]} />
      </div>
    </div>
  )
}

export default Details
