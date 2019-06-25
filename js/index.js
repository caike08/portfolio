const init = () => {
  document
    .addEventListener('DOMContentLoaded', () => {
      const date = document.getElementById('date');
      date.innerHTML = new Date().getFullYear();


      window.addEventListener('scroll', (e) => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 59;
        const header = document.querySelector('header');
        
        if(distanceY > shrinkOn) {
          header.classList.add('sticky');
        }
        else {
          if(header.classList.contains('sticky')) {
            header.classList.remove('sticky');
          }
        }
    });
  })
}

window.onload = init();