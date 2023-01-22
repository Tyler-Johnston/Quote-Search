import { useState, useEffect } from "react"

export const RandomQuote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            fetch("https://usu-quotes-mimic.vercel.app/api/random")
            .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("unable to fetch a random quote")
            })
            .then(quote => setQuote(quote))
            .catch(err => console.log(err))
        }
        fetchQuote();
    }, [])

    return (
        <div> 
            <p className="text">{quote ? quote.content : 'Loading Quote...'}</p>
            <p className="text">-{quote ? quote.author : 'Unknown Author'}</p>
        </div>
    )
}