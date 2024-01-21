import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("12345678");

  const passwordRef=useRef(null);
  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  })

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (includeNumber) {
      str += "0123456789"
    }
    if (includeChar) {
      str += "!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, includeNumber, includeChar, setPassword]);

  useEffect(() => {
    generatePassword()
  }, [length, includeNumber, includeChar, generatePassword])

  return (
    <div className='bg-blue-950 flex flex-col justify-center items-center w-full h-screen p-8'>
      <div className='border-2 rounded-xl p-4 flex flex-col items-center hover:shadow-rose-200 hover:shadow-xl'>
        <h1 className='text-center font-bold text-2xl mb-4 text-rose-200 p-2 rounded-xl'>Password Generator</h1>
        <div className='mb-4 flex'>
          <input
            type="text"
            className='border-none outline-none p-2 rounded-l-xl hover:bg-cyan-50'
            readOnly
            ref={passwordRef}
            placeholder='Generated Password'
            value={password}
          />
          <button
          className='p-2 bg-teal-300 rounded-r-xl font-bold hover:bg-yellow-400 active:scale-110'
          onClick={copyToClipboard}
          >Copy</button>
        </div>

        <div className='w-60 flex justify-between items-center'>
          <label
            className="text-white font-bold"
            htmlFor="length">Length</label>
          <input
          className='w-50'
            type="range"
            onChange={(e) => { setLength(e.target.value) }}
            min={8}
            max={100}
          />
          <input
          className="text-black bg-rose-200 rounded-full px-2 w-[25%] outline-none border-none text-center"
          type="number"
          min={8}
          max={100}
          onChange={(e) => { setLength(e.target.value) }}
          value={length}/>
        </div>
        <div className='w-60 flex justify-center items-center'>
          <label htmlFor="numbers" className='text-white font-bold'>Include Numbers</label>
          <input
            className="scale-150 m-4"
            defaultChecked="true"
            onChange={() => {
              setIncludeNumber(prev => !prev)
            }}
            type="checkbox" />
        </div>
        <div className='w-60 flex justify-center items-center'>
          <label htmlFor="chars" className='text-white font-bold'>Include Characters</label>
          <input
            className="scale-150 m-4"
            onChange={() => {
              setIncludeChar(prev => !prev)
            }}
            type="checkbox" />
        </div>
      </div>
    </div>
  )
}

export default App