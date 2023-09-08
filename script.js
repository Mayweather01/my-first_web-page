// JavaScript code to display the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
}

// JavaScript code to display the current UTC time
function updateCurrentTime() {
    const currentTime = new Date().toUTCString();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
}

// JavaScript code to update time and date continuously
function updateDateTime() {
    updateCurrentDay();
    updateCurrentTime();
}

setInterval(updateDateTime, 1000); // Update every second