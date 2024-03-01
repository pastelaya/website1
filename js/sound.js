sound = ['boo', 'boo', 'boo', 'boo', 'boo', 'boo']

sound.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click', ()=> {
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})