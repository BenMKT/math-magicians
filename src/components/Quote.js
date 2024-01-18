import { useState, useEffect } from 'react';
import '../styles/Quote.css';

function DisplayQuote() {
  const [quote, setQuote] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      const category = 'inspirational';
      const apiKey = 'i09eDd5A9kESKvq9MMUz4w==dkIr2jqBsavnhYuj';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error loading quote');
        }

        const data = await response.json();
        setQuote(data[0].quote);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchQuote();
  }, []);

  if (hasError) {
    return <div className="errormsg">Something went wrong...</div>;
  }

  if (isLoading) {
    return <div className="errormsg">Loading...</div>;
  }

  return (
    <div className="quotes">
      <h1 className="quote">Quote of the day</h1>
      <p className="quote">{quote}</p>
    </div>
  );
}

export default DisplayQuote;
