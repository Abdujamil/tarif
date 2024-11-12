// Начальное значение таймера
let hours = 0;
let minutes = 0;
let seconds = 10;

// Функция для обновления отображения таймера
function updateTimerDisplay() {
  const timerElements = document.querySelectorAll(".timer");  // Используем querySelectorAll для всех элементов с классом
  timerElements.forEach(timerElement => {
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerElement.textContent = formattedTime;
  });
}

// Функция обратного отсчета
function countdown() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    
    // Отключаем все кнопки с классом "selectButton"
    const selectButtons = document.querySelectorAll(".disableButton"); // Используем querySelectorAll для всех кнопок с классом
    selectButtons.forEach(selectButton => {
      selectButton.disabled = true; // Добавляем атрибут disabled
    });

    return;
  }

  // Уменьшаем секунды
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      hours--;
    }
  }
  updateTimerDisplay();
}

// Запускаем таймер при загрузке страницы
updateTimerDisplay();
const timerInterval = setInterval(countdown, 1000);

// Клик по карточка
let cardConsl = document.querySelectorAll(".cardConsl");
let cardBazTarif = document.querySelectorAll(".cardBazTarif");
let cardRass = document.querySelectorAll(".cardRass");

// Добавляем обработчик клика для каждой карточки "Консультация"
cardConsl.forEach((card) => {
  card.onclick = () => {
    console.log("Карточка: Консультация");
  };
});

// Добавляем обработчик клика для каждой карточки "Базовый тариф"
cardBazTarif.forEach((card) => {
  card.onclick = () => {
    console.log("Карточка: Базовый тариф");
  };
});

// Добавляем обработчик клика для каждой карточки "Рассрочка"
cardRass.forEach((card) => {
  card.onclick = () => {
    console.log("Карточка: Рассрочка");
  };
});