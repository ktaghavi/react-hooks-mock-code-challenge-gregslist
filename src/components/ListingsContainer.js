import React from "react";
import ListingCard from "./ListingCard";
function ListingsContainer({listingsData, removeListing, search}) {
  

  return (
    <main>
      <ul className="cards">
        {listingsData.map((listing) => <ListingCard key={listing.id} listing={listing} removeListing={removeListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
