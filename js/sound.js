sounds = ['boo1', 'boo2', 'boo3', 'boo4', 'boo5', 'boo6']

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