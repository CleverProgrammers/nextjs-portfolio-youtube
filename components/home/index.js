import Hero from './hero'
import Skills from './skills'
import Work from './work'
import Projects from './projects'
import Contact from './contact.js'

const HomePage = () => {
  return (
    <div className='bg-blue pt-28'>
      <div className='overflow-x-hidden'>
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
