let etoile = document.getElementById('etoile');
let moon = document.getElementById('moon');
let montagne3 = document.getElementById('montagne3');
let montagne4 = document.getElementById('montagne4');
let reve = document.getElementById('reve');
let bateau = document.getElementById('bateau');
let Anime = document.querySelector('#Anime');
window.onscroll = function(){
    let value = scrollY;
    etoile.style.left = value + 'px'; 
    moon.style.top = value * 4 + 'px'; 
    montagne3.style.top = value * 2 + 'px';
    montagne4.style.top = value * 1.5 + 'px';
    reve.style.top = value + 'px';
    bateau.style.top = value + 'px';
    bateau.style.left = value *3 + 'px';
    Anime.style.fontSize = value+ 'px';
    if(scrollY >= 67){
        Anime.style.fontSize = 67 + 'px';
        Anime.style.position = 'fixed';
        if(scrollY >= 478){
            Anime.style.display = 'none';
        }else{
            Anime.style.display = 'block';
        }
        if(scrollY >= 110){
            document.querySelector('#main').style.background = 'linear-gradient(#376281,#10001f'
        }else{document.querySelector('#main').style.background = 'linear-gradient(#3a0229,#1b0132)'

        }
    }
    
}