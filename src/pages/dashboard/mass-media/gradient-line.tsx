import React from 'react'

export const GradientLine = ({}) => {
  const [ percent1, percent2, percent3 ] = [0.3, 0.3, 0.4]

  const gradientStyle = {
    width: '100px',
    height: '30px',
    background: `linear-gradient(90deg, black 0%, black ${percent1}, red ${percent1}, red ${percent2}, yellow ${percent2}, yellow 100%)`,
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, #0FE873 0%, #0FE873 30%, #F14C4C 30%, #F14C4C 50%, #15A3F1 50%, #15A3F1 100%)`
      }}
    className="w-24 h-2 rounded-lg bg-white" 
    // style={gradientStyle}
    ></div>
  )
}
