const right = document.querySelector('.right');
const left = document.querySelector('.left');
const container = document.querySelector('.container');

right.addEventListener('mouseenter', () => {
   // add class in container
   container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
   // add class in container
   container.classList.remove('hover-right');
});

left.addEventListener('mouseenter', () => {
    // add class in container
    container.classList.add('hover-left');
 });

left.addEventListener('mouseleave', () => {
    // add class in container
    container.classList.remove('hover-left');
 });

 // End Code...haha!!