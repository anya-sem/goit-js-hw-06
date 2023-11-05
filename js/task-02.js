// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")
ingredients.forEach((ing) => {
  const li = document.createElement("li")
  li.textContent = ing
  li.classList.add("item")
  list.insertAdjacentElement("beforeend", li)
});
console.log(list);









