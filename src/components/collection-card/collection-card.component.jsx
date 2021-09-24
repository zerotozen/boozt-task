import React from "react";

import "./collection-card.styles.scss";

export function CollectionCard({ name, brand, price, image }) {
  const actualPrice = parseFloat(price).toFixed(2);
  return (
    <div className="collectionCard__container">
      <div className="collectionCard__titleContaier">
        <h3 className="collectionCard__title">{name?.toUpperCase()}</h3>
      </div>
      <span>{brand}</span>
      <img className="collectionCard__image" src={image} alt="" />
      <span className="collectionCard__price">{actualPrice} €</span>
    </div>
  );
}
