import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*()_+"
    }
    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() * str.length + 1)
      password += str[index]
    }
    setPassword(password)
  },[length,numberAllowed,characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,generatePassword])
  return (
  <>
  <div className="flex min-h-screen w-full items-center justify-center bg-black px-4 py-8">
    <div className="w-full max-w-[480px] rounded-lg bg-[#202636] px-4 py-3 text-orange-50 shadow-md">
      <h1
        className="text-center text-base font-medium text-white"
        style={{ fontSize: '16px', letterSpacing: 0, margin: '8px 0 12px' }}
      >
        Password generator
      </h1>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-0 gap-y-4">
        <input
          ref={passwordRef}
          type="text"
          value={password}
          placeholder="Password"
          className="w-full rounded-l-lg bg-white px-3 py-2 text-gray-800 outline-none"
          readOnly
        />
        <button className="rounded-r-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        onClick={copyPasswordToClipboard}
        >
          copy
        </button>
        <div className="col-span-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-orange-500">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer accent-blue-500"
              onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              className="cursor-pointer accent-blue-500"
              onChange={(e)=>setNumberAllowed(prev=>!prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characterAllowed}
              className="cursor-pointer accent-blue-500"
              onChange={(e)=>setCharacterAllowed(prev=>!prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default App
