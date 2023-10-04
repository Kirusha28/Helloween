const el = document.getElementById('btn-play');
const playing = false;
const player = new Audio('gg.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ // слушаем окончание трека
  el.innerText = "Done";
  playing = false;
});
el.addEventListener('click', () => {player.play();});
