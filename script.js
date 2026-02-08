const video = document.getElementById("bg-video");
const entryOverlay = document.getElementById("entry-overlay");
const enterText = document.getElementById("enter-text");
const musicIcon = document.getElementById("music-icon");
const volumeSlider = document.getElementById("volume");

// Başlangıç ayarları
video.muted = false;
video.volume = 0.4;
musicIcon.textContent = "🔉";

// Giriş click
enterText.addEventListener("click", () => {
    entryOverlay.style.display = "none";
    video.muted = false;
    video.play();
    musicIcon.textContent = "🔉";
});

// Müzik ikon tıklama
musicIcon.addEventListener("click", () => {
    video.muted = !video.muted;
    musicIcon.textContent = video.muted ? "🔇" : "🔉";
});

// Ses slider
volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value / 100;
});
