const pantalla=document.querySelector('.pantalla-contador');
const botones=document.querySelector('.botones');

botones.addEventListener('click', e=>{
    if(e.target.classList.contains('sumar')){
        pantalla.innerHTML++;
    }
    if(e.target.classList.contains('restar')){
        pantalla.innerHTML--;
    }
    
    if(e.target.classList.contains('reset')){
        pantalla.innerHTML=0;
    }


});