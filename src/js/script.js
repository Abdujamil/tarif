// Начальное значение таймера
let hours = 22;
let minutes = 36;
let seconds = 10;

// Функция для обновления отображения таймера
function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerElement.textContent = formattedTime;
}

// Функция обратного отсчета
function countdown() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    document.getElementById("selectButton").disabled = true; // Отключаем кнопку
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