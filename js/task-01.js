// Напиши скрипт, який:

// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст
// заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// 1
const categories = document.getElementById("categories");
const categoriesAmount = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesAmount.length);

// 2
const items = document.querySelectorAll("#categories .item");
items.forEach((item) => {
    const headerContent = item.querySelector("h2").textContent;
    const numberOfElements = item.querySelectorAll("li").length;

    console.log(`Categories: ${headerContent}`);
    console.log(`Elements: ${numberOfElements}`);
});

