var playlist = {Caleb: "Hello"}

function updatePlaylist(playlist, Yufeng, 'World') {
  return object.assign({}, playlist, {Yufeng: 'World'})
}

function removeFromPlaylist(playlist, Yufeng) {
  delete playlist.Yufeng
  return playlist
}