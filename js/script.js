
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

3) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

4) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

// 1)


function deleteAdv() {
    const silmek = document.querySelector('.promo__adv-title');
    silmek.textContent = '';
    const img = document.querySelectorAll('.img');
    img.forEach(el => {
        el.remove()
    });
}
deleteAdv();


// 2)
function saytDeyis() {
    const h1 = document.getElementById('h1');
    h1.innerHTML = 'Drama';
    const sekil = document.querySelector('.promo__bg');
    sekil.style.backgroundImage = 'url(img/bg.jpg)';
}
saytDeyis();

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
function sortArr() {
    movieDB.movies.sort();
}
sortArr();
// 4)
function createMovieList() {
    movieDB.movies.forEach((i, index) => {
        del.innerHTML += `<li class="promo__interactive-item"> ${index + 1}) ${i}
    <div class="delete"></div>
    </li>`;
    });
}
createMovieList();

const button = document.querySelector('button');
button.addEventListener('submit', () => {
    preventDefault();
});

const addForm = document.querySelector('form');
const addInput = document.querySelector('input');
const addCheckbox = document.querySelector('checkbox');


// addCheckbox.addEventListener('click', (event) => {
//     if (event.target.checked) {
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// })