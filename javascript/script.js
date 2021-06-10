
// querySelectors
const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title  = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['hey', 'summer', 'ukulele']

// keep track of songs
let songIndex = 1

//Initially load songs
loadSong(songs[songIndex])

// update song details

function loadSong(song) {
    title.innerText = song
    audio.src = `/music/music-player_music_/${song}.mp3`
    cover.src = `/images/${song}.jpg`
}