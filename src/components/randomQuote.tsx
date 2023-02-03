import { useState, useEffect } from "react"

interface Quote {
    author: string;
    content: string;
}

export const RandomQuote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    async function fetchQuote() {
        const randomQuote = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
        setQuote(await randomQuote.json());
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