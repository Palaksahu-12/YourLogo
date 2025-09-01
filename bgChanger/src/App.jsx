import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
         <button 
         onClick={() => setColor("red")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "red"}}>Red</button>
         <button 
         onClick={() => setColor("Pink")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "pink"}}>Pink</button>
         <button 
         onClick={() => setColor("Violet")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "violet"}}>Violet</button>
         <button 
         onClick={() => setColor("lavender")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "Lavender"}}>Lavender</button>
         <button 
         onClick={() => setColor("grey")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "grey"}}>Grey</button>
         <button 
         onClick={() => setColor("white")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "white"}}>White</button>
         <button 
         onClick={() => setColor("black")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg text-white transition duration-200" 
         style={{backgroundColor: "black"}}>Black</button>
         <button 
         onClick={() => setColor("Purple")}
         className="outline-none focus:outline-none active:scale-95 px-3 py-1 rounded-full text -white shadow-lg transition duration-200" 
         style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
