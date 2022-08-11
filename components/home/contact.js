import { Button } from '../shared'
import { personalDetails } from '../../data/PersonalDetails'

const style = {
  wrapper: `py-10 mx-16 grid grid-cols-12 gap-4 place-items-center`,
  textContainer: `col-span-6`,
  subtitle: `mb-[1rem] mt-[.2rem] text-5xl tracking-wide text-white`,
  pinkAccent: `text-pink`,
  title: `my-[1.2rem] text-1xl font-extrabold text-white leading-none`,
  buttonContainer: `col-span-6 my-10`,
}

const Contact = () => {
  return (
    <div className={style.wrapper} id='contact'>
      <div className={style.textContainer}>
        <div>
          <h1 className={style.subtitle}>
            <span className={style.pinkAccent}>Send</span> me an email!
          </h1>
          <h1 className={style.title}>Let&apos;s get in touch!</h1>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <a href={`mailto:${personalDetails.email}`}>
          <Button text='Send email' type={'solid'} />
        </a>
      </div>
    </div>
  )
}
export default Contact
