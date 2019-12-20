var navContainer = document.querySelector('nav');
navContainer.addEventListener('click', addBorder);

function addBorder(event) {
  if (event.target.classList.contains('button')) {
  addNavBorder(event);
  addContent(event);
  }
}

function addNavBorder() {
  var navButtons = document.querySelectorAll('button');
  for (i = 0; i<navButtons.length; i++) {
    navButtons[i].classList.remove('bottom-border');
    event.target.classList.add('bottom-border');
  }
}

function removeContent(event) {
  var removedContent = document.querySelectorAll('.contents');
  for (i = 0; i<removedContent.length; i++) {
    removedContent[i].classList.add('hidden');
  }
}

function addContent() {
  var content = document.querySelector(`#${event.target.dataset.id}`);
  removeContent();
  if(event.target.innerText === `${event.target.innerText}`) {
    content.classList.remove('hidden');
  }
}














//
