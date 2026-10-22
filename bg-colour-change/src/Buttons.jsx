import React from 'react'

export default function Buttons() {
   const [color, setColor] = React.useState('white');  

//     const changeColour = (color) => {
//         // Implementation for changing colour
//         setColor(color);
//         document.body.style.backgroundColor = color;
//     }
//   return (
//     <div>
//         <button onClick={() => changeColour('red') } className="bg-red-500 text-white p-4 rounded-lg" m-5>Red</button>
//         <button onClick={() => changeColour('blue') } className="bg-blue-500 text-white p-4 rounded-lg m-5">Blue</button>
//         <button onClick={() => changeColour('green') } className="bg-green-500 text-white p-4 rounded-lg m-5">Green</button>
//     </div>
//   )

  return (
    <div
    style={{ backgroundColor: color }}
    className="flex flex-col items-center justify-center min-h-screen gap-4"
    >
        <button onClick={() => setColor('red') } className="bg-red-500 text-white p-4 rounded-lg" m-5>Red</button>
        <button onClick={() => setColor('blue') } className="bg-blue-500 text-white p-4 rounded-lg m-5">Blue</button>
        <button onClick={() => setColor('green') } className="bg-green-500 text-white p-4 rounded-lg m-5">Green</button>
    </div>
  )
}
