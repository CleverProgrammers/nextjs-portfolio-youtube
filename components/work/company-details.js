import { useEffect, useState } from 'react'

export default function CompanyDetails({ activeCompany }) {
  const style = {
    wrapper: `bg-violet rounded-2xl px-10 py-10 w-60 sm:w-72 mx-16 sm:mx-16 md:mx-32 md:w-80 lg4:w-96 xl:min-w-full xl:min-h-full`,
    company: `font-bold mb-2 text-7xl lg:text-6xl cursor-auto`,
    position: `mb-1 text-lg`,
    dates: `italic text-sm lg:text-7xl`,
    list: `text-sm lg:text-7xl mt-8 list-disc ml-5 z-30 cursor-auto`,
  }
  const [company, setCompany] = useState(undefined)

  useEffect(() => {
    setCompany(activeCompany)
  }, [activeCompany])

  return (
    <div className={style.wrapper}>
      <p className={style.company}>{company?.name}</p>
      <p className={style.position}>{company?.position}</p>
      <p className={style.dates}>
        {company?.startDate} - {company?.endDate ? company?.endDate : 'Present'}
      </p>
      <ul className={style.list}>
        {company?.responsibilities.map(r => {
          return <li key={r}>{r}</li>
        })}
      </ul>
    </div>
  )
}
