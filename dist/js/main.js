let hours=0,minutes=0,seconds=10;function updateTimerDisplay(){document.querySelectorAll(".timer").forEach(e=>{var t=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:`+String(seconds).padStart(2,"0");e.textContent=t})}function countdown(){0===hours&&0===minutes&&0===seconds?(clearInterval(timerInterval),document.querySelectorAll(".disableButton").forEach(e=>{e.disabled=!0})):(0<seconds?seconds--:(seconds=59,0<minutes?minutes--:(minutes=59,hours--)),updateTimerDisplay())}updateTimerDisplay();let timerInterval=setInterval(countdown,1e3),cardConsl=document.querySelectorAll(".cardConsl"),cardBazTarif=document.querySelectorAll(".cardBazTarif"),cardRass=document.querySelectorAll(".cardRass");cardConsl.forEach(e=>{e.onclick=()=>{console.log("Карточка: Консультация")}}),cardBazTarif.forEach(e=>{e.onclick=()=>{console.log("Карточка: Базовый тариф")}}),cardRass.forEach(e=>{e.onclick=()=>{console.log("Карточка: Рассрочка")}}),fetch("./tarifs.json").then(e=>e.json()).then(e=>{let a=document.getElementById("tarifs-container");e.forEach(e=>{var t=document.createElement("article");t.classList.add("tarif__card"),t.innerHTML=`
      <header class="tarif__card-head">
        <img src="${e.imgSrc}" alt="Иконка тарифа" class="tarif__card-icon" />
        <h3 id="${e.id}-title" class="tarif__card-title">${e.title}</h3>
        <p class="tarif__card-description">${e.description}</p>
      </header>
      <div class="tarif__card-body">
        <div class="free-block" aria-labelledby="free-block-title">
          <h4 id="free-block-title" class="free-block__title">${e.price}</h4>
          <p class="free-block__subtitle">${e.duration}</p>
          <button class="free-block__btn">Выбрать</button>
        </div>
      </div>
      <footer class="tarif__card-foot">
        <ul class="tarif__features">
          ${e.features.map(e=>`<li class="tarif__feature"><span class="tarif__feature-icon"><img src="/src/svg/done.svg" alt="" aria-hidden="true" /></span>${e}</li>`).join("")}
        </ul>
      </footer>
    `,a.appendChild(t)})});