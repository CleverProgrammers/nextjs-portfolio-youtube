import React from 'react'

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
  return <div></div>
}

export default Hero
