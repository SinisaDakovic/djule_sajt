const hamb = document.querySelector('.hamb');
const mobn = document.querySelector('.mob-nav');

const body = document.getElementById('html');

hamb.addEventListener('click', (e) =>{
    e.preventDefault();
    hamb.classList.toggle('active');
    mobn.classList.toggle('show');
    body.classList.toggle('off');
    
})


const slider = document.querySelector('.tests-list');
let isDown = false;
let startx;
let scrollLeft;


slider.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    isDown = true;
    startx = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', ()=>{
    isDown = false;
});
slider.addEventListener('mouseup', ()=>{
    isDown = false;
});
slider.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
   const x = e.pageX - slider.offsetLeft;
   const move = x - startx;
   slider.scrollLeft = scrollLeft - move;
  
});

slider.addEventListener('touchstart', (e) =>{
    isDown = true;
    startx = e.touches[0].clientX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchend', () =>{
    isDown = false;
});
slider.addEventListener('touchcancel', () =>{
    isDown = false;
});
slider.addEventListener('touchmove', (e) =>{
    if(!isDown) return; 
   const x = e.touches[0].clientX - slider.offsetLeft;
   const move = x - startx;
   slider.scrollLeft = scrollLeft - move;
});