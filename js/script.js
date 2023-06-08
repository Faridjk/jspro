
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

3) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

4) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

// 1)

const silmek = document.querySelector('.promo__adv-title');
silmek.textContent = '';

const img = document.querySelectorAll('.img');
img.forEach(el => {
    el.remove()
});

// 2)

const h1 = document.getElementById('h1');
h1.innerHTML = 'Drama';

const sekil = document.querySelector('.promo__bg');
sekil.style.backgroundImage = 'url(img/bg.jpg)';

const movieDB = {
    movies: [
        "titanic",
        "Avatar 2",
        "Bəyin oğurlanması",
        "logan",
        "Xaç atası"
    ]
};
// 3)
const del = document.querySelector('.promo__interactive-list');
del.innerHTML = '';
movieDB.movies.sort();
// 4)

movieDB.movies.forEach((i, index) => {
    del.innerHTML += `<li class="promo__interactive-item"> ${index + 1}) ${i}
    <div class="delete"></div>
    </li>`;
});

