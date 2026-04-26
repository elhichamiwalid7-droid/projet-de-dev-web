let etoile = document.getElementById('etoile');
let moon = document.getElementById('moon');
let montagne3 = document.getElementById('montagne3');
let montagne4 = document.getElementById('montagne4');
let reve = document.getElementById('reve');
let bateau = document.getElementById('bateau');
let Coffee = document.querySelector('.Coffee');
window.onscroll = function(){
    let value = scrollY;
    etoile.style.left = value + 'px'; 
}