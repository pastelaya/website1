sounds = ['bo01', 'bo02', 'bo03', 'bo04', 'bo05', 'bo06', 'bo07', 'bo08', 'bo09', 'bo10', 'bo11', 'bo12', 'bo13']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})


function stopSongs() {
    sounds.forEach(sound => {
        song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}