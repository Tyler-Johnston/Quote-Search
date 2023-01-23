import { useState, useEffect } from "react"

interface Quote {
    _id: string;
    content: string;
    author: string;
}

export const RandomQuote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    async function fetchQuote() {
        const apiCall = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
        setQuote(await apiCall.json());
    }
    
    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <div className="textFont"> 
            <p>{quote ? quote.content : "Loading Quote..."}</p>
            <p>-{quote ? quote.author : "Unknown Author"}</p>
        </div>
    )
}