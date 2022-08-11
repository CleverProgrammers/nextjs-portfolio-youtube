import Image from 'next/image'
import { technologies } from '../../data/Technologies'

const style = {
  wrapper: `flex justify-around my-[4rem] w-full px-[15rem] gap-[3rem] `,
  imageContainer: `flex-1 group relative rounded-2xl transition-all duration-300 transform hover:scale-105 `,
  image: `rounded-2xl p-[2rem] m-[10rem]`,
  detailsContainer: `flex-1`,
  projectTitle: `mb-[1.4rem] text-2xl font-extrabold text-white leading-none`,
  projectDescription: `sm:w-4/5 mb-3 mt-1 text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7`,
  techIconsContainer: `flex gap-[2rem] flex-wrap w-full `,
  iconContainer: `flex flex-col justify-center items-center text-center my-4`,
  icon: `mb-2 h-12`,
}

const ProjectCard = ({ project }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          width={518}
          height={257}
          objectFit='cover'
          src={project.img}
          alt={project.name}
          className={style.image}
        />
      </div>
      <div className={style.detailsContainer}>
        <div className={style.projectTitle}>{project.name}</div>
        <div className={style.projectDescription}>{project.description}</div>
        <div className={style.techIconsContainer}>
          {project.tags.map(_tag => {
            const tech = technologies.find(_tech => _tech.name === _tag)

            return (
              tech && (
                <div className={style.iconContainer} key={tech.name}>
                  <img src={tech.src} alt={tech.name} className={style.icon} />
                </div>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
