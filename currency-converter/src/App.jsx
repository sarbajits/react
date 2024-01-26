import { useEffect, useState } from 'react'
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import InputBox from './InputBox'
function App() {

  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const currenyOptions = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  useEffect(() => {
    convert()
  }, [from, to, amount, convertedAmount, currencyInfo])

  const swap = () => {
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className='bg-slate-800 h-screen w-screen flex justify-center items-center flex-col bg-[url(https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]'>
      <h1
        className='bg-white font-bold rounded-lg px-4'
      >Currency converter From {from.toUpperCase()} to {to.toUpperCase()}</h1>

      <div
      className='h-fit w-f m-4 p-4 rounded-lg backdrop-blur-lg flex flex-col items-center'
      >
        <InputBox
          label="From"
          amount={amount}
          onCurrencyChange={(currency) => setFrom(currency)}
          OnAmountChange={(amount) => setAmount(amount)}
          currenyOptions={currenyOptions}
          selectedCurrency={from}
        />


        <div>
          <button
            onClick={swap}
            className='text-black font-bold bg-cyan-400 px-2 rounded-lg hover:bg-cyan-600 active:bg-red-400 active:font-semibold active:rotate-2'
          >Swap</button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          OnAmountChange={(amount) => setConvertedAmount(amount)}
          currenyOptions={currenyOptions}
          selectedCurrency={to}
        />
      </div>

    </div>
  )
}

export default App