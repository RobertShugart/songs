//Action Creator
export const selectSont = song => {
  //Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
