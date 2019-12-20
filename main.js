var navContainer = document.querySelector('nav');
navContainer.addEventListener('click', addBorder);

function addBorder(event) {
  if (event.target.classList.contains('button')) {
  addNavBorder(event);
  }
}

function addNavBorder() {
  var navButtons = document.querySelectorAll('button');
  for (i = 0; i<navButtons.length; i++) {
    navButtons[i].classList.remove('bottom-border');
    event.target.classList.add('bottom-border');
  }
}












//
