import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

    const [listingsData, setListingsData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
      fetch("http://localhost:6001/listings")
        .then (res=> res.json())
        .then (data => setListingsData(data))}, []);

    console.log(search)
    const listingsToDisplay = listingsData.filter(listing => {
      return listing.description.toLowerCase().includes(search.toLowerCase())
    })
    console.log(listingsToDisplay);

    function removeListing(listingToRemove) {
      const newListingsData = listingsData.filter(listing => listing.id !== listingToRemove.id)
      setListingsData(newListingsData);
    }
  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer serach={search} listingsData={listingsToDisplay} removeListing={removeListing}/>
    </div>
  );
}

export default App;
