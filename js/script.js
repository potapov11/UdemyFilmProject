/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const promo = document.querySelector('.promo__adv');
// console.log(promo);

const body = document.querySelector('.body');
promo.remove();

//2
const genre = document.querySelector('.promo__genre');
genre.innerText = 'Драма';

//3
const promoBg = document.querySelector('.promo__bg');
console.log(promoBg);
promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

//4
movieDB.movies.sort();
console.log(movieDB.movies);
