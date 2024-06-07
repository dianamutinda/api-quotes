import { useState } from 'react'
import "./Quotes.css"
import ScaleLoader from 'react-spinners'

const Quotes = () =>{
  const [quotes, setQuotes] = useState(null)
  const [loader, setLoader] = useState(null)

  const handleQuotes = async (ev) =>{
    ev.preventDefault;
   
  try {
    const api_link = "https://api.adviceslip.com/advice"
    const response = await fetch(api_link);
    const display = await response.json();
    console.log(display.slip.advice)
    setQuotes(display.slip.advice)

  } catch (error) {
    console.log("error occured");
    setQuotes("error occured");
  }
  }

  return(
  <div className='text'>
      <h1>&copy; diana mwende</h1>
      <button onClick={handleQuotes}>generate quotes</button>
      <h1>{quotes}</h1>
      <ScaleLoader color="#36d7b7" />
    
    </div>

    )

}


export default Quotes;
