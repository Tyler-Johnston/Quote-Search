import { useState, useEffect } from "react"

interface Quote {
    _id: string;
    content: string;
    author: string;
}

export const SpecificQuotes = ({author}: Quote) => {
    const [data, setData] = useState<Quote | null>(null);

    async function fetchQuotes() {
        const apiCall = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`);
        setData(await apiCall.json());
    }
    
    // this should only make further requests to the API once the author prop changes
    useEffect(() => {
        fetchQuotes();
    }, [author])

    //TODO: fix 'quote' and 'index' having 'implicit any type'. needs to be strictly typed
    return (
        <div> 
        {data ? data.results.map((quote, index) => (
            <div className="quoteBox textFont" key={index}>
                <p>{quote.content}</p>
                <p>-{quote.author}</p>
            </div>
        )) : "Loading Quotes..."}
        </div>
    )
}