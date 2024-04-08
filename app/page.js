'use client'
// import Diagram from "@/utils/beam-diagram"
import { useState, useEffect } from "react"



const Page = () => {
  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(0)
  const [x1, setX1] = useState(0)
  const [x2, setX2] = useState(0)
  const [vS, setVS] = useState(0)
  const [vE, setVE] = useState(0)
  const [vL1, setVl1] = useState(0)
  const [vL2, setVl2] = useState(0)
  // const [vS, setVS] = useState(0)

  const plotSFD = async () => {
    await fetch('http://localhost:8000/shear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
  }

  const plotBMD = async () => {
    const res = await fetch('http://localhost:8000/moment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
  }

  const showBeam = async () => {
    const res = await fetch('http://localhost:8000/shear', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify()
    })
  }




  return (
    <div className='min-h-screen m-0 pb-32 flex flex-col items-center gap-3 min-w-screen bg-blue-200'>
      <div>
        <h1 className='text-4xl text-center p-4 underline font-extrabold text-slate-800'>Beam Analysis</h1>
      </div>
      
      {/* Main content, containing the canvas representation */}

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


    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Varying Load</span>
      <input type="number" className="p-2 w-48 rounded-md" value={vS} onChange={(e)=>setVS(e.target.value)} placeholder="Start Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" value={vL1} onChange={(e)=>setVl1(e.target.value)} placeholder="Start load (kN)"/>
      <input type="number" className="p-2 w-48 rounded-md" value={vE} onChange={(e)=>setVE(e.target.value)} placeholder="End position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" value={vL2} onChange={(e)=>setVl2(e.target.value)} placeholder="End Load (kN)"/>
      {/* <button className="bg-red-400 text-white rounded p-2">Delete Load</button> */}
    </div>

    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Point Load 1</span>
      <input type="number" className="p-2 w-48 rounded-md" value={p1} onChange={(e)=>setP1(e.target.value)} placeholder="Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" value={x1} onChange={(e)=>setX1(e.target.value)} placeholder="Load Value(kN)"/>
      {/* <button className="bg-red-400 text-white rounded p-2">Delete Load</button> */}
    </div>

    <div className="flex gap-2 items-center">
      <span className=" text-slate-500 w-36 text-center underline">#Point Load 2</span>
      <input type="number" className="p-2 w-48 rounded-md" value={p2} onChange={(e)=>setP2(e.target.value)} placeholder="Position (m)"/>
      <input type="number" className="p-2 w-48 rounded-md" value={x2} onChange={(e)=>setX2(e.target.value)} placeholder="Load Value(kN)"/>
      {/* <button className="bg-red-400 text-white rounded p-2">Delete Load</button> */}
    </div>

        </div>

        <button className="bg-green-400 p-3 self-center" onClick={showBeam}>Visualise</button>
        <div id="plotting" className="hidden gap-2 self-center m-8">
          <button className="p-3 rounded-md bg-blue-500 text-white" onClick={plotSFD}>Plot SFD</button>
          <button className="p-3 rounded-md bg-blue-500 text-white" onClick={plotBMD}>Plot BMD</button>
        </div>
      </div>

    </div>
  )
}

export default Page
