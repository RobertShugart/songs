import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Loser", duration: "4:05" },
    { title: "Ironic", duration: "2:15" },
    { title: "Voice of Truth", duration: "3:45" },
    { title: "Cowboy", duration: "5:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
