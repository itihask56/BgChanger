import { useState } from 'react'
 
 

function App() {
   const[color,setColor]=useState('white')

  return (
    <div className='h-screen w-full duration-200 grid items-center place-content-center' style={{backgroundColor:color}}>
      <div className=''>
      <h1  className=' text-4xl font-bold text-white '>Click the button below to see the effect</h1>
       
      </div>
      <div className='fixed flex  justify-center flex-wrap inset-x-0 bottom-12' >

           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-8 py-3 bottom-12">
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'green'}}>Green</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'blue'}}>Blue</button>
            <button onClick={()=>setColor("black")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'black'}}>Black</button>
            <button onClick={()=>setColor("indigo")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'indigo'}}>Indigo</button>
            <button onClick={()=>setColor("violet")} className='outline-none px-4 py-2 text-white shadow-lg rounded-lg' style={{backgroundColor:'violet'}}>Violet</button>
           </div>
      </div>

    </div>
  )
}

export default App
