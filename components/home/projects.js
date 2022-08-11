import Image from 'next/image'
import { ProjectCard, TextCards } from '../shared'
import { projects } from '../../data/Projects'
import { textCardsData } from '../../data/TextCardsData'

const style = {
  projectsHeaderWrapper: `py-20`,
  headerContent: `ml-4 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center`,
  textWrapper: `col-span-6 flex flex-col justify-center items-center`,
  textContent: `items-center w-3/4 relative`,
  boxVectorContainer: `block absolute right-0 top-0 w-20 w-52 opacity-60`,
  title: `my-[6rem] text-1xl font-extrabold text-white leading-none`,
  pinkAccent: `text-pink font-bold`,
  textCardContainer: `relative col-span-6`,
  projectsWrapper: `relative ml-4 md:mx-16`,
  projectsContainer: `flex flex-col gap-4 place-items-center`,
}

const Projects = () => {
  return (
    <>
      <div className = {style.projectsHeaderWrapper}>
        <div className = {style.headerContent}>
          <div className = {style.textWrapper}>
            <div className = {style.textContent}>
              <div className = {style.boxVectorContainer}>
                <Image
                  src = '/images/vectors/boxes.svg'
                  alt = 'Box Vector'
                  height = {100}
                  width = {100}
                />
              </div>

              <h1 className = {style.title}>
                Some of my projects I&apos;ve{' '}
                <span className = {style.pinkAccent}>built.</span>
              </h1>
            </div>
          </div>

          <div className = {style.textCardContainer}>
            {textCardsData.map((card, index) => (
              <div key = {index} className = {`${card.styles} `}>
                <TextCards
                  heading = {card.heading}
                  text = {card.text}
                  color = {card.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className = {style.projectsWrapper} id = 'projects'>
        <div className = {style.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard project = {project} key = {index}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default Projects
