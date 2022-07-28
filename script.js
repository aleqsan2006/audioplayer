var data = {
    title: [

        "ay ledi ",
        " beliy sneg ",
        " AQUANEON - Выдыхаю ",
        " ADJARABET.3000",
        " ya mishka gumber",

    ],

    song: [
        "music/song1.mp3",
        "music/song2.mp3",
        "music/song3.mp3",
        "music/song4.mp3",
        "music/song5.mp3",
    ],

    poster: [

        "https://i.gifer.com/7d20.gif",
        "https://thumbs.gfycat.com/AdeptShockingBronco-max-1mb.gif",
        "https://phoneky.co.uk/thumbs/screensavers/down/music/beatvis_nxyz5qxr.gif",
        "https://c.tenor.com/g7c0Ja8BNGAAAAAC/money-cash.gif",
        "https://c.tenor.com/0kozASeLq0sAAAAC/spongebob-dance.gif"
    ],



}


var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration))
    currentTime.textContent = min + ":" + sec;

}

function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent += "/" + min + ":" + sec;
}

function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0;
    }
    playSong();
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}

function muted() {
    let mute = document.getElementById("mute")

    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
   
    } else {
        song.muted = true
        mute.src =  "images/volume-mute.png"
    }


}

function decrease(){
    song.volume -= 0.2
}

function increase(){
    song.volume+= 0.2
}