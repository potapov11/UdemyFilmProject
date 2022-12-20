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
const promo = document.querySelectorAll('.promo__adv img');
// console.log(promo);
promo.forEach(function(i) {
    i.remove();
});


//2
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';


//3
const promoBG = document.querySelector('.promo__bg');
promoBG.style.backgroundImage = 'url(img/bg.jpg)';


//4
movieDB.movies.sort(); //!Сортировка

const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = '';

movieDB.movies.forEach(function(item, i) {
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>  
    `;
});

