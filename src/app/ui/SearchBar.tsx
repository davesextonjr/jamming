import { useState } from "react";
import { sampleTracks } from "../lib/trackInfo";

export default function SearchBar(props: any){
  const [searchTerm, setSearchTerm] = useState("");
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(searchTerm)
    props.setTracks(sampleTracks);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="SearchButton" onClick={clickHandler}>
        SEARCH
      </button>
    </div>
  );
}
