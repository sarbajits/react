// import { useState } from 'react'
// function App() {
//   const [color, setColor] = useState('#212121')
//   return (
//     <div className='w-full h-screen flex flex-col justify-between items-center' style={{ backgroundColor: color }}>
//       <h1 className='w-11/12 text-center bg-lime-400 font-bold rounded mt-4 p-2'>Bg Changer</h1>

//       <div className='h-fit bg-slate-800 w-11/12 rounded mb-4 flex justify-around flex-wrap text-center items-center p-4'>
//         <button
//           onClick={() => setColor("red")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'red' }}>Red</button>

//         <button
//           onClick={() => setColor("yellow")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'yellow' }}>Yellow</button>

//         <button
//           onClick={() => setColor("green")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'green' }}>Green</button>

//         <button
//           onClick={() => setColor("blue")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'blue' }}>Blue</button>

//         <button
//           onClick={() => setColor("pink")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'pink' }}>Pink</button>

//         <button
//           onClick={() => setColor("magenta")} className='text-black font-bold px-2 rounded-md mb-4' style={{ backgroundColor: 'magenta' }}>Magenta</button>
//       </div>

//     </div>
//   )
// }
// export default App

import { useState } from 'react'
import Button from './Button'
function App() {
  const [color, setColor] = useState('#212121')
  
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center' style={{ backgroundColor: color }}>
      <h1 className='w-11/12 text-center bg-lime-400 font-bold rounded mt-4 p-2'>Bg Changer</h1>

      <div className='h-fit bg-slate-800 w-11/12 rounded mb-4 flex justify-around flex-wrap text-center items-center p-4'>

          <Button color="blue" onClick={() => setColor('blue')} />
          <Button color="yellow" onClick={() => setColor('yellow')} />
          <Button color="green" onClick={() => setColor('green')} />
          <Button color="lightblue" onClick={() => setColor('lightblue')} />
          <Button color="lightgreen" onClick={() => setColor('lightgreen')} />
          <Button color="orange" onClick={() => setColor('orange')} />
          <Button color="pink" onClick={() => setColor('pink')} />
          <Button color="teal" onClick={() => setColor('teal')} />
          <Button color="aqua" onClick={() => setColor('aqua')} />
          <Button color="olive" onClick={() => setColor('olive')} />
          <Button color="magenta" onClick={() => setColor('magenta')} />
          <Button color="red" onClick={() => setColor('red')}/>

      </div>

    </div>
  )
}
export default App