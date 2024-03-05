
import styles from "./page.module.css";
import PlayList from "./ui/PlayList";
import SearchBar from "./ui/SearchBar";
import SearchResults from "./ui/SearchResults";
import Track from "./ui/Track";
import TrackList from "./ui/TrackList";

export default function Home() {
  return (
    <div>
      <PlayList />
      <SearchBar />
      <SearchResults />
      <TrackList />
      <Track />
    </div>
  )
}
