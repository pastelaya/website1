var list = document.getElementsByClassName('list'),
search = document.getElementById('search')
loading = document.getElementById('loading')
expand = document.getElementById('expand')
sound = document.getElementById('sound')
nav = document.getElementById('nav')
landing = document.getElementById('landing')

search.addEventListener ("mouseover",
  () => {
    search.style.color = 'red'
 });

