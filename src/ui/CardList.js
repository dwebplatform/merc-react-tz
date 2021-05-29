import "./card-list.css";

import classNames from "classnames";
import { useEffect, useState } from "react";

export const Card = ({ className = "", src }) => {
  return (
    <div className={classNames("card", className)}>
      <img alt="ui-pic" src={src} className="card__image" />
    </div>
  );
};

export const CardList = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCards() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/photos/?start=0&_limit=3"
        );
        let data = await response.json();
        setCards(data);
      } catch (e) {}
    }
    getCards();
  }, []);
  return (
    <div className="card-container planshet-card-container">
      {cards[0] && (
        <Card
          src={cards[0].url}
          className="card--left planshet-card-container-item"
        />
      )}
      {cards[1] && (
        <Card
          src={cards[1].url}
          className="card--right planshet-card-container-item"
        />
      )}
      {cards[2] && (
        <Card
          src={cards[2].url}
          className="card--bottom planshet-card-container-item"
        />
      )}
    </div>
  );
};
