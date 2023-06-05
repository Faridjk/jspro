
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

3) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

4) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

const movieDB = {
    movies: [
        "Avatar 2",
        "Bəyin oğurlanması",
        "logan",
        "titanic",
        "Xaç atası"
    ]
};

// 1)

const silmek = document.querySelector('.promo__adv-title');
silmek.textContent = '';
const img = document.querySelectorAll('.img');
img[0].src = '';
img[0].alt = '';
img[1].src = '';
img[1].alt = '';
img[2].src = '';
img[2].alt = '';

// 2)

const h1 = document.getElementById('h1');
h1.innerHTML = 'Drama';

const sekil = document.getElementById('sekil');
sekil.style.backgroundImage = 'url(img/bg.jpg)';
sekil.style.width = '100%';
sekil.style.height = '400px';

// 3)

const sortirovka = document.querySelectorAll('.promo__interactive-item');
let arr = [];
sortirovka.forEach((i) => {
    arr.push(i.innerHTML);
    i.innerHTML = '';
});

const sorted = arr.sort();
let result = '';
let k = 1;

sorted.forEach((j) => {
    result += `<li>${k}.${j}</li> <br>`;
    k++;
});
document.querySelector('.promo__interactive-list').innerHTML = result;

