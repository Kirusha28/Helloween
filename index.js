const el = document.getElementById('btn-play');
const player = new Audio('gg.mp3');
player.preload = "auto";
el.addEventListener('click', () => {
    player.play();
});

function bodyMusic() {
    const bgPlayer = new Audio('gg.mp3');
    bgPlayer.preload = "auto";
    bgPlayer.play();
    console.log("gg");
}
