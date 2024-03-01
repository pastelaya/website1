sounds == ['boo', 'boo', 'boo', 'boo', 'boo', 'boo']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innetText=sound

    document.getElementById('Buttons').appendChild(btn)
})