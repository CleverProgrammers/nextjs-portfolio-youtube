import SkillIcons from './skillIcons'

const style = {
  wrapper: `relative py-8`,
  cylinderVector: `absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright`,
  lVector: `absolute left-0 md:left-35p bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none`,
  textWrapper: `ml-4 md:mx-16 grid grid-cols-12 gap-4 place-items-center items-center`,
  textContent: `col-span-6 flex flex-col justify-center items-center`,
  titleContainer: ` w-3/4 relative`,
  title: `my-[2rem] text-1xl font-extrabold text-white leading-none`,
  pinkAccent: `text-pink`,
  iconsContainer: `col-span-6 flex flex-col justify-center items-center my-10 mt-0`,
}

export default function Skills() {
  return (
    <div className={style.wrapper} id='skills'>
      <img
        src='/images/vectors/cylinder.svg'
        alt='Cylinder Vector'
        height={100}
        width={100}
        className={style.cylinderVector}
      />
      <img
        src='/images/vectors/l-vector.svg'
        alt='L Vector'
        className={style.lVector}
      />

      <div className={style.textWrapper}>
        <div className={style.textContent}>
          <div className={style.titleContainer}>
            <h1 className={style.title}>
              Think. <span className={style.pinkAccent}>Code.</span> Debug.
            </h1>
          </div>
        </div>
        <div className={style.iconsContainer}>
          <SkillIcons />
        </div>
      </div>
    </div>
  )
}
