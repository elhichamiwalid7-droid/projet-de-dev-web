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
        if(scrollY >= 420){
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


// قائمة الأنميات (يمكنك تعديل الأسماء والتصنيفات هنا)
const animes = [
    { title: "Attack on Titan", genre: "Action,bloody,imagination", image: "./Projet_web/attack.png" },
    { title: "Death Note", genre: "excitability, Ambiguity", image: "./Projet_web/death_note.jpg" },
    { title: "Hunter x Hunter", genre: "imagination,adventures", image: "./Projet_web/Hunter.jpg" },
    { title: "One Piece", genre: "Action,adventures,Comedy", image: "./Projet_web/one_piece.png" },
    { title: "Demon Slayer", genre: "Action,demons,historic", image: "./Projet_web/demon.png" },
    { title: "Jujutsu Kaisen", genre: "Action,supernatural", image: "./Projet_web/jujutsu.png" },
    { title: "Naruto Shippuden", genre: "Action,Ninja", image: "./Projet_web/Narotu.png" },
    { title: "Vinland Saga", genre: "Viking,philosophical", image: "./Projet_web/Vinland.png" },
    { title: "Fullmetal Alchemist", genre: "Action,magic,drama", image: "./Projet_web/fullmetal.png" },
    { title: "blue lock", genre:"Athlete,enthusiastic", image: "./Projet_web/blue_lock.png" }
];

// دالة لتوليد البطاقات وإضافتها إلى الصفحة
function displayAnimes() {
    const container = document.getElementById('anime-container');

    animes.forEach(anime => {
        // إنشاء عنصر البطاقة
        const card = document.createElement('div');
        card.className = 'anime-card';

        // وضع هيكل البطاقة (صورة + عنوان + تصنيف)
        // إذا كان مسار الصورة فارغاً, ستظهر مساحة رمادية فارغة
        card.innerHTML = `
            <img src="${attack.png}" alt="${attack_on_titan}" class="anime-image">
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <span class="genre">${anime.genre}</span>
            </div>
        `;

        // إضافة البطاقة إلى الحاوية الرئيسية
        container.appendChild(card);
    });
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = displayAnimes;