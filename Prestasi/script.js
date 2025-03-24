function startAudio() {
    var audio = document.getElementById("myaudio");
    audio.volume = 1.0;
    audio.play().then(() => {
        console.log("Audio berhasil diputar.");
    }).catch((error) => {
        console.error("Gagal memutar audio:", error);
    });
}