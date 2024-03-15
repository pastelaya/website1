var list = document.getElementsByClassName('list'),
hovered = false;

function AnimationListener() {
    if(hovered)
    {
      list.classList.remove('animated');
      list.style.webkitTransform = 'scale(2)';
      list.style.MozTransform = 'scale(2)';
      list.style.msTransform = 'scale(2)';
      list.style.OTransform = 'scale(2)';
      list.style.transform = 'scale(2)';
    }
}