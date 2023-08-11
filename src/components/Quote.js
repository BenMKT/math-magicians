import { useState, useEffect } from 'react';

// eslint-disable-next-line max-len
// Create a new component for displaying a quote, Show a loading state if the request is still pending, and Show an error state if the request fails
function DisplayQuote() {
  // Create a state variable to hold the quote
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const category = 'happiness';
      const apiKey = '3apcodfSda7ISeDOks5vwg==ws9GGvL3Ki7UXpQY';
      const url = `https://api.api-ninjas.com/v1/quotes?/category=${category}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Error loading quote...');
        }
        const jsonData = await response.json();
        setData(jsonData[0]);
      } catch (hasError) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) {
    return (
      <div className="Quote">
        <p className="quote">Loading...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="Quote">
        <p className="quote">Error loading quote...</p>
      </div>
    );
  }

  // Return JSX to display the quote
  return (
    <div className="Quote">
      <h1 className="Description">Quote</h1>
      <p className="quote">{data.quote}</p>
      <p className="author">{data.author}</p>
    </div>
  );
}

export default DisplayQuote;
