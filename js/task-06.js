// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// 1.Яка кількість символів повинна бути в інпуті, зазначається
// в його атрибуті data - length.

// 2.Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener("blur", function () {
    const expectedLength = parseInt(validationInput.getAttribute("data-length"));
    const inputValue = validationInput.value.length;
    
    if (inputValue === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
    } else {
          validationInput.classList.remove("valid");
          validationInput.classList.add("invalid");
        }
});

