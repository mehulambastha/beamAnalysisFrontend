import React, { useEffect, useRef } from 'react'

const Diagram = (beamParams) => {
  const {beamLength, support1, support2, pointLoads, distributedLoads} = beamParams

  const canvasRef = useRef(null)

  useEffect(()=>{   
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
    
      // context.fillStyle = 'gray'
      // context.fillRect(0, 0, 10, 400)

      context.fillStyle = 'black'
      context.fillRect(10, canvas.height-30, 600, 10)

  }, [])

  return (
    <canvas height={500} width={800} ref={canvasRef}/>
      
  )
}

export default Diagram
