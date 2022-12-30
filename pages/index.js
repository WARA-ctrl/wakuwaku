import { useState, useEffect } from "react";

export default function Home() {
  const [word, setWord] = useState("");
  const [countries, setContries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Jjx7bXR08Br78KFC98EH1dSgzw4cQbOxC7mYz8Og&date=${word}`
    )
      .then((res) => res.json())
      .then((data) => {
        setContries(data);
      })
      .catch((err) => setContries([]));
  }, [word]);
  console.log(word);
  return (
    <>
      {!countries && <div>no data</div>}

      {countries && (
        <div>
          <div className="search-input">
            <h1>Input a date to see amazing picture from NASA!</h1>
            <input
              type="date"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>

          <div className="big-card">
            <img src={countries.url} alt={countries.copyright} />
            <small>Copyright : {countries.copyright}</small>
            <h3>{countries.explanation}</h3>
          </div>
        </div>
      )}
    </>
  );
}
