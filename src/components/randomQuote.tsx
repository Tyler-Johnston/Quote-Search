import { useState, useEffect } from "react"

export const RandomQuote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            const apiCall = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
            const jsonData = await apiCall.json();
            console.log(jsonData);
            setQuote(jsonData);
        }
        fetchQuote();
    }, [])

    return (
        <div className="textFont"> 
            <p>{quote ? quote.content : "Loading Quote..."}</p>
            <p>-{quote ? quote.author : "Unknown Author"}</p>
        </div>
    )
}