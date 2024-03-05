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
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const addToPlaylist = (track: Track) => {
    setPlaylist((prev: Track[]) => [...prev, track]);
  }

  const removeFromPlaylist = (trackID: string) => {
    setPlaylist((prev: Track[]) => prev.filter((track) => track.id !== trackID));
  }

  return (
    <div>
      <PlayList />
      <SearchBar setTracks={setTracks}/>
      <SearchResults tracks={tracks} addSong={addToPlaylist}/>
      <TrackList />
    </div>
  )
}
