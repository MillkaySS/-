// Тексты для чтения (можете заменить на свои)
const texts = [
    "Пример текста 1 для чтения.",
    "Пример текста 2 для чтения.",
    "Пример текста 3 для чтения."
];

let currentTextIndex = 0;
const textContainer = document.getElementById('text-container');

// Функция для обновления текста
function updateText() {
    textContainer.textContent = texts[currentTextIndex];
}

// Переключение на предыдущий текст
document.getElementById('prev-btn').addEventListener('click', function() {
    currentTextIndex = (currentTextIndex - 1 + texts.length) % texts.length;
    updateText();
});

// Переключение на следующий текст
document.getElementById('next-btn').addEventListener('click', function() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    updateText();
});

// Инициализация текста при загрузке страницы
updateText();
