// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;

incrementButton.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue;
    value.style.backgroundColor = "green";
    value.style.color = "white";
});
decrementButton.addEventListener("click",  () => {
    counterValue--;
    value.textContent = counterValue;
    value.style.backgroundColor = "red";
    value.style.color = "white";
});

