import React ,{useId} from 'react'


function InputBox({
    label, 
    amount,
    onamountchange,
    oncurrencychange,
    currencyoption=[],
    selectcurrency="usd",
    amountdisable= false,
    curremcydisable=false,
    
    className = "",
}) {
   
   const amountInputId = useId()

    return (
        <div className={`bg-orange-200 p-3 rounded-lg text-sm flex  ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-orange-900 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}

                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=> onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-orange-900 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-yellow-200 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=> oncurrencychange&& oncurrencychange(e.target.value)}
                    disabled={curremcydisable}
                    
                >
                    {currencyoption.map((currency)=> ( <option value={currency}>
                            {currency}
                        </option>
                ))}
                       
                </select>
            </div>
        </div>
    );
}

export default InputBox;
