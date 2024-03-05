"use client";
import { useState } from "react";

import styles from "./page.module.css";
import PlayList from "./ui/PlayList";
import SearchBar from "./ui/SearchBar";
import SearchResults from "./ui/SearchResults";
import TrackList from "./ui/TrackList";

import { Track } from "./lib/definitions";

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [playlistName, setPlaylistName] = useState([]);

  return (
    <div>
      <PlayList />
      <SearchBar setTracks={setTracks}/>
      <SearchResults tracks={tracks}/>
      <TrackList />
    </div>
  )
}
