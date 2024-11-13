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


fetch('./tarifs.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('tarifs-container');
  data.forEach(tarif => {
    const article = document.createElement('article');
    article.classList.add('tarif__card');
    article.innerHTML = `
      <header class="tarif__card-head">
        <img src="${tarif.imgSrc}" alt="Иконка тарифа" class="tarif__card-icon" />
        <h3 id="${tarif.id}-title" class="tarif__card-title">${tarif.title}</h3>
        <p class="tarif__card-description">${tarif.description}</p>
      </header>
      <div class="tarif__card-body">
        <div class="free-block" aria-labelledby="free-block-title">
          <h4 id="free-block-title" class="free-block__title">${tarif.price}</h4>
          <p class="free-block__subtitle">${tarif.duration}</p>
          <button class="free-block__btn">Выбрать</button>
        </div>
      </div>
      <footer class="tarif__card-foot">
        <ul class="tarif__features">
          ${tarif.features.map(feature => `<li class="tarif__feature"><span class="tarif__feature-icon"><img src="/src/svg/done.svg" alt="" aria-hidden="true" /></span>${feature}</li>`).join('')}
        </ul>
      </footer>
    `;
    container.appendChild(article);
  });
});