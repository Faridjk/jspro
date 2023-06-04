
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

5) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

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


// 2)

const h1 = document.getElementById('h1');
h1.innerHTML = 'Drama';

const sekil = document.getElementById('sekil');
sekil.style.backgroundImage = 'url(img/bg.jpg)';
sekil.style.width = '100%';
sekil.style.height = '400px';

// 4)

const birinci = document.getElementById('far1');
birinci.innerHTML = '1. Avatar 2';

const ikinci = document.getElementById('far2');
ikinci.innerHTML = '2. Beyin ogurlanmasi';

const ucuncu = document.getElementById('far3');
ucuncu.innerHTML = '3. Logan';

const dorduncu = document.getElementById('far4');
dorduncu.innerHTML = '4. Titanic';

const besinci = document.getElementById('far5');
besinci.innerHTML = '5. Xac atasi';
