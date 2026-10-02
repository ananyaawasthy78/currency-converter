import { useState } from 'react'
import InputBox from './components/inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamount, setconvertedamount] = useState(0)
  const currencyinfo= useCurrencyInfo(from)
  const options = Object.keys(currencyinfo)
  const swap=()=> {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

   const convert=()=>{
      setconvertedamount(amount* currencyinfo[to])

   }

  return (
    <>
    
     
        <div
          
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/7412102/pexels-photo-7412102.jpeg')",
            }}

        > 
        <h1 className='text-3xl text-orange-600 font-mono font-bold'> currency converter</h1>
            <div className="w-full">
              
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoption={options}
                                oncurrencychange={(currency)=>setfrom(currency)}
                                selectcurrency={from}
                                onamountchange={(amount)=>setamount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-600 text-yellow-300 px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                                amount={convertedamount}
                                currencyoption={options}
                                oncurrencychange={(currency)=>setto(currency)}
                                selectcurrency={to}
                                amountdisable

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-orange-600 text-yellow-300 px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

      
    </>
  )
}

export default App
