
const countdownElement = document.getElementById("countdown");
const targetDate = new Date("2025-01-01T00:00:00").getTime(); 


function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        window.location.href = "newyear.html"; 
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
}


setInterval(updateCountdown, 1000);

function showHappyNewYear() {
    window.location.href = "newyear.html"; 
}
