## Завдання 1
HTML містить список категорій `ul#categories`.
```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```
Напиши скрипт, який:
1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
2. Для кожного элемента `li.item` у списку `ul#categories`, знайде і виведе в консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

* Category: Animals

    Elements: 4

* Category: Products

    Elements: 3

* Category: Technologies

    Elements: 5

## Завдання 2
HTML містить порожній список `ul#ingredients`.
```html
<ul id="ingredients"></ul>
```
JavaScript містить масив рядків.
```js
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```
Напиши скрипт, який для кожного елемента масиву `ingredients`:

1. Створить окремий елемент `<li>`. Обов'язково використовуй метод `document.createElement()`.
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас `item`.
4. Після чого, вставить усі `<li>` за одну операцію у список `ul#ingredients`.
## Завдання 3
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список `ul.gallery`.
```html
<ul class="gallery"></ul>
```
Використовуй масив об'єктів `images` для створення елементів `<img>`, вкладених в `<li>`. Для створення розмітки використовуй шаблонні рядки і метод `insertAdjacentHTML()`.

- Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
- Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
```js
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```
## Завдання 4
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в `input` і натискає кнопку `Створити`, після чого рендериться колекція. Натисненням на кнопку `Очистити`, колекція елементів очищається.
```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```
Створи функцію `createBoxes(amount)`, яка приймає один параметр - число. Функція створює стільки `<div>`, скільки вказано в `amount` і додає їх у `div#boxes`.

1. Розміри найпершого `<div>` - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію `getRandomHexColor` для отримання кольору.
```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```
Створи функцію `destroyBoxes()`, яка очищає вміст `div#boxes`, у такий спосіб видаляючи всі створені елементи.