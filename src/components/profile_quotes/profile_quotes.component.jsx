import './profile_quotes.styles.scss'

import { QUOTES } from "../../data/data";

import { useEffect } from "react";
import { useState } from "react";

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(QUOTES[0]);

  useEffect(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (i >= QUOTES.length - 1) {
        i = 0;
      } else {
        i++;
      }
      setCurrentQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
      console.log(i);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <section className="profile__quotes">
      <p>"{currentQuote}"</p>
    </section>
  );
};

export default Quotes;
