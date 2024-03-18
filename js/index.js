var list = document.getElementsByClassName('list'),
    search = document.getElementById('search')
loading = document.getElementById('loading')
expand = document.getElementById('expand')
sound = document.getElementById('sound')
nav = document.getElementById('nav')
landing = document.getElementById('landing')

search.addEventListener("mouseover",
    () => {
        search.style.color = 'red'
    });

loading.addEventListener("mouseover",
    () => {
        loading.style.color = 'red'
    });

expand.addEventListener("mouseover",
    () => {
        expand.style.color = 'red'
    });

sound.addEventListener("mouseover",
    () => {
        sound.style.color = 'red'
    });

nav.addEventListener("mouseover",
    () => {
        nav.style.color = 'red'
    });

landing.addEventListener("mouseover",
    () => {
        landing.style.color = 'red'
    });

    search.addEventListener("mouseleave",
    () => {
        search.style.color = 'darkblue'
    });

    loading.addEventListener("mouseleave",
    () => {
        loading.style.color = 'darkblue'
    });

    expand.addEventListener("mouseleave",
    () => {
        expand.style.color = 'darkblue'
    });

    sound.addEventListener("mouseleave",
    () => {
        sound.style.color = 'darkblue'
    });

    nav.addEventListener("mouseleave",
    () => {
        nav.style.color = 'darkblue'
    });

    landing.addEventListener("mouseleave",
    () => {
        landing.style.color = 'darkblue'
    });
