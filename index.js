const el = document.getElementById('btn-play');
const playing = false;
const player = new Audio('gg.mp3');
player.preload = "auto";
el.addEventListener('click', () => {
    player.play();
    console.log("gg");
});