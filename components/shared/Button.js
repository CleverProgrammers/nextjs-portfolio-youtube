import React from 'react'

const Button = () => {
  const style = {
    buttonStyle: `font-bold px-6 py-4 w-64 w-60 text-7xl h-25 transition-all rounded-full overflow-hidden border-2  border-pink hover:shadow-light-xl
                        ${
                          type === 'solid'
                            ? 'bg-pink text-blue hover:bg-transparent hover:text-pink hover:border-pink'
                            : 'text-pink bg-transparent hover:bg-pink hover:text-blue'
                        }
                       `,
  }
  return <div></div>
}

export default Button
