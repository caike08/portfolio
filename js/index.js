const init = () => {
  const date = document.querySelector('#date');


  document.addEventListener('readystatechange', (event) => {
    date.innerHTML = new Date().getFullYear();
  });

  document.addEventListener('scroll', (event) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 240;
    const header = document.querySelector('header');
    
    if(distanceY > shrinkOn) {
      header.classList.add('sticky');
    }
    else {
      header.classList.remove('sticky');
    }
  })
}

window.onload = init();