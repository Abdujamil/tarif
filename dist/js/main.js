let hours=22,minutes=36,seconds=10;function updateTimerDisplay(){var t=document.getElementById("timer"),e=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:`+String(seconds).padStart(2,"0");t.textContent=e}function countdown(){0===hours&&0===minutes&&0===seconds?(clearInterval(timerInterval),document.getElementById("selectButton").disabled=!0):(0<seconds?seconds--:(seconds=59,0<minutes?minutes--:(minutes=59,hours--)),updateTimerDisplay())}updateTimerDisplay();let timerInterval=setInterval(countdown,1e3);