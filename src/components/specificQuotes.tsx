import { useState, useEffect } from "react"

interface SpecificQuoteProps {
    author: string;
}

export const SpecificQuotes = ({author}: SpecificQuoteProps) => {
    const [data, setData] = useState(null);

    // this should only make further requests to the API once the author prop changes
    useEffect(() => {
        async function fetchQuotes() {
            const apiCall = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${author}`);
            const jsonData = await apiCall.json();
            console.log(jsonData);
            setData(jsonData);
        }
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