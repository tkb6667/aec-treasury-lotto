const ticketChecker = document.querySelector("#ticket-checker");
const ticketNumber = document.querySelector("#ticket-number");
const countdown = document.querySelector("[data-countdown]");

ticketChecker?.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = ticketNumber.value.trim();

  if (!number) {
    ticketNumber.focus();
    return;
  }

  window.location.href =
    `check-prize.html?number=${encodeURIComponent(number)}`;
});

function formatTime(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  if (!countdown) {
    return;
  }

  const targetDate = new Date(countdown.dataset.countdown).getTime();
  const currentDate = Date.now();
  const difference = Math.max(0, targetDate - currentDate);

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  countdown.querySelector("[data-days]").textContent =
    formatTime(days);

  countdown.querySelector("[data-hours]").textContent =
    formatTime(hours);

  countdown.querySelector("[data-minutes]").textContent =
    formatTime(minutes);

  countdown.querySelector("[data-seconds]").textContent =
    formatTime(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);