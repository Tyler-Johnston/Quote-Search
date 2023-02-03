import { useState, useEffect } from "react"

interface Quote {
    id: number;
    author: string;
    content: string;
    results: Quote[];
}

export const SpecificQuotes = ({author}: Quote) => {
    const [quotes, setQuotes] = useState<Quote | null>(null);

    async function fetchQuotes() {
        const specificQuotes = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`);
        setQuotes(await specificQuotes.json());
    }
    
    // this should only make further requests to the API once the author prop changes
    useEffect(() => {
        fetchQuotes();
    }, [author])

    return (
        <div> 
        {quotes ? quotes.results.map((quote: Quote) => (
            <div className="quoteBox textFont" key={quote.id}>
                <p>{quote.content}</p>
                <p>-{quote.author}</p>
            </div>
        )) : "Loading Quotes..."}
        </div>
    )
}