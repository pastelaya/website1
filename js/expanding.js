panels = document.querySelectorAll('.panel')

panels.ForEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })

})
