import React, { useId } from "react"
function InputBox({
    label,
    amount,
    onCurrencyChange,
    OnAmountChange,
    currenyOptions = [],
    selectedCurrency,
}) {
    const boxId = useId();
    return (
        <div className='bg-yellow-100 rounded-lg p-2 m-2'>
            <div className='flex flex-row justify-between mb-2'>
                <label
                    className='font-bold'>
                    {label}</label>
                <p
                    className='font-bold'
                >Choose Currency</p>
            </div>
            <div className='flex flex-row justify-between'>
                <input
                    className='bg-yellow-400 rounded-lg outline-none border-none p-1 mx-2'
                    value={amount}
                    onChange={(e) => OnAmountChange && OnAmountChange(e.target.value)}
                    type="text" />
                <select
                    className='bg-yellow-400 rounded-lg outline-none border-none p-1'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >

                    {currenyOptions.map((currency) => (<option value={currency}>{currency}</option>))}
                </select>
            </div>
        </div>
    )
}

export default InputBox