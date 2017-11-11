var playlist = {Caleb: "Hello"};

function updatePlaylist(playlist, Yufeng, 'World') {
  return Object.assign({}, playlist, {Yufeng: 'World'});
}

function removeFromPlaylist(playlist, Yufeng) {
  delete playlist.Yufeng;
  return playlist;
}
