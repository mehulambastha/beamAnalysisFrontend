'use client'
import Diagram from "@/utils/beam-diagram"
import { useState, useEffect } from "react"



const Page = () => {
  const [loadElements, setLoadElements] = useState([
    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Varying Load</span>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Start Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Start load (kN)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="End position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="End Load (kN)"/>
      <button disabled={true} className="bg-slate-400 text-white rounded p-2">Delete Load</button>
    </div>
  ])

  const pointLoadInput =           
    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Point Load</span>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Load Value(kN)"/>
      <button className="bg-red-400 text-white rounded p-2">Delete Load</button>
    </div>


  const varyingLoadInput = 
    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Varying Load</span>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Start Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="Start load (kN)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="End position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" placeholder="End Load (kN)"/>
      <button className="bg-red-400 text-white rounded p-2">Delete Load</button>
    </div>

  const addLoad = (type) => {

    if (type == 'point') {
      setLoadElements([...loadElements, pointLoadInput])
    } else if (type == "varying") {
      setLoadElements([...loadElements, varyingLoadInput])
    }

  }

  const validateData = () => {
    const plottingElem = document.getElementById('plotting')
    plottingElem.classList.remove('hidden')
    plottingElem.classList.add('flex')
  } 

  return (
    <div className='min-h-screen m-0 pb-32 flex flex-col items-center gap-3 min-w-screen bg-blue-200'>
      <div>
        <h1 className='text-4xl text-center p-4 underline font-extrabold text-slate-800'>Beam Analysis</h1>
      </div>
      
      {/* Main content, containing the canvas representation */}

      <Diagram />


      {/* input fields */}
      <div className="flex flex-col gap-3 m-auto">
        <div className="flex gap-2 border-b-2 b border-black pb-8 mb-8">
          <p>Beam Constraints</p>
          <input type="number" className="p-2 w-48 rounded-md" placeholder="Beam Length (m)"/>      
          <input type="number" className="p-2 w-48 rounded-md" placeholder="Support 1 (m)"/>
          <input type="number" className="p-2 w-48 rounded-md" placeholder="Support 2 (m)"/>
        </div>


        {/* input rows */}
        <div className="flex gap-5 items-start flex-col">
        <h1 className="text-xl font-medium underline">Enter the required data</h1>
          {
            loadElements
          }
        </div>

        <select className="text-center bg-blue-400 text-white p-2 self-end">
          <option value="">Add Load</option>
          <option value={'point'} onClick={()=>addLoad('point')}>Point Load</option>
          <option value={'varying'} onClick={()=>addLoad('varying')}>Varying Load</option>
        </select>
        <button className="bg-green-400 p-3 self-center" onClick={validateData}>Visualise</button>
        <div id="plotting" className="hidden gap-2 self-center m-8">
          <button className="p-3 rounded-md bg-blue-500 text-white">Plot SFD</button>
          <button className="p-3 rounded-md bg-blue-500 text-white">Plot BMD</button>
        </div>
      </div>


      {/* SF AND BM Diagrams */}
      <div className="flex flex-col items-center gap-5 w-screen">
        <h3>Shear Force Diagram</h3>
        <canvas className='items-center h-[20rem] w-[60rem] justify-center bg-white h'></canvas>

        <h3>Bending Moment Diagram</h3>
        <canvas className='items-center h-[20rem] w-[60rem] justify-center bg-white h'></canvas>
      </div>

    </div>
  )
}

export default Page
