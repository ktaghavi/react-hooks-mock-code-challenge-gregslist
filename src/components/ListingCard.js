import React, {useState} from "react";

function ListingCard({listing, removeListing}) {

  const[favorite, setFavorite] = useState(false);

  function toggleFavorite() {
    setFavorite(fav => !fav);
  };

  function deleteListing() {
    removeListing(listing);
    fetch(`http://localhost:6001/listings/${listing.id}`, {method: 'DELETE'});
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$1,000,000</span>
        <img src={listing.image} alt={listing.name} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
