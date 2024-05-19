// Ждем, пока весь контент страницы загрузится
document.addEventListener("DOMContentLoaded", function() {
    // Создаем объект для хранения данных
    var what_people_think = {};

    // Создаем первое поле ввода (ключ)
    var inputKey = document.createElement("input");
    inputKey.type = "text";
    inputKey.placeholder = "Who are you?(if you don't want to say just write anything'))";
    inputKey.id = "input-key";

    // Создаем второе поле ввода (значение)
    var inputValue = document.createElement("input");
    inputValue.type = "text";
    inputValue.placeholder = "How can I make myself beter";
    inputValue.id = "input-value";

    // Найдем контейнер, в который вставим поля ввода
    var container = document.getElementById("input-container");

    // Вставляем поля ввода в контейнер
    container.appendChild(inputKey);
    container.appendChild(inputValue);

    // Найдем кнопку и добавим к ней обработчик события
    var saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", function() {
        var key = inputKey.value.trim();
        var value = inputValue.value.trim();

        if (key && value) {
            // Сохраняем данные в объект
            what_people_think[key] = value;
            console.log(what_people_think); // Выводим объект в консоль

            // Очищаем поля ввода после сохранения
            inputKey.value = "";
            inputValue.value = "";
        } else {
            alert("Please one more time");
        }
    });
});