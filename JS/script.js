const bar = document.getElementById('bro');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('activee');
    })
}