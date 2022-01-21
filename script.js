const container = document.querySelector('.container')
const sliderContainer = document.querySelector('.slider_container')
const Slides = Array.from(document.querySelectorAll('.single_slide'));
let width = Slides[0].offsetWidth + 30;
sliderContainer.style.minWidth = `${Slides.length * width}px`;
let start,
change;



container.addEventListener('dragstart',(e)=>{
    start = e.clientX
});
container.addEventListener('dragover',(e)=>{
    e.preventDefault()
    let dragging = e.clientX
    change = start - dragging
})
container.addEventListener('dragend' , slideShow)


container.addEventListener('touchstart',(e)=>{
    start = e.touches[0].clientX
});
container.addEventListener('touchmove',(e)=>{
    e.preventDefault()
    let dragging = e.touches[0].clientX
    change = start - dragging
})
container.addEventListener('touchend' , slideShow)

function slideShow(){
    if(change > 0){
        container.scrollLeft += width ;
    }
    else{
        container.scrollLeft -= width;
    }
}