import { Track } from "../lib/definitions";

export default function SearchResults({ tracks, addSong }: { tracks: Track[], addSong: (track: Track) => void}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {tracks.map((track) => (
        <div key={track.id} className="Track">
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>
              {track.artist} | {track.album}
            </p>
          </div>
          <button className="Track-action">+</button>
        </div>
      ))}
    </div>
  );
}
