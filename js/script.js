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

const imgs = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      promoBG = document.querySelector('.promo__bg');
      

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
imgs.forEach((img) => {
  console.log(img);
  img.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'Драма';

//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS

promoBG.style.backgroundImage = 'url(img/bg.jpg)';

//4 Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 




























// const promoImg = document.querySelectorAll('.promo__adv img'),
// 	poster = document.querySelector('.promo__bg'),
// 	genre = poster.querySelector('.promo__genre'),
// 	movieList = document.querySelector('.promo__interactive-list');

// //1 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// promoImg.forEach(function(img) {
//   img.remove();
// });

// //2 Изменить жанр фильма, поменять "комедия" на "драма"
// genre.textContent = 'Драма';

// //3 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// poster.style.backgroundImage = 'url("img/bg.jpg")';

// //4 Список фильмов на странице сформировать на основании данных из этого JS файла.
// //Отсортировать их по алфавиту

// movieList.innerHTML = ''; //!Удаляем список полностью(очищаем его)
// movieDB.movies.sort();    //!Сортируем элементы по алфавиту

// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
// 	<li class="promo__interactive-item">${i + 1} ${film}
// 		<div class="delete"></div>
// 	</li>
// 	`;
// });


