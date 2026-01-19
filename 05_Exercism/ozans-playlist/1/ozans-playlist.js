// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  // throw new Error('Remove this line and implement the function');
    return [...new Set(playlist)];

}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  // throw new Error('Remove this line and implement the function');
  for(let k of playlist){
    if(k === track){
      return true
    }
  }
  return false;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  // throw new Error('Remove this line and implement the function');
   if (playlist.includes(track)) {
    return playlist;
  }
  return [...playlist, track];
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  // throw new Error('Remove this line and implement the function');
  return playlist.filter(t => t !== track);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  // throw new Error('Remove this line and implement the function');
  const set = new Set();
  for(let k of playlist){
    let s = k.split("-");
    set.add(s[1].trim());
  }
  return [...set];
}
