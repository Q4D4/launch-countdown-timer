// References
const daysBox = document.querySelector('[data-id="days"');
const hoursBox = document.querySelector('[data-id="hours"');
const minutesBox = document.querySelector('[data-id="minutes"');
const secondsBox = document.querySelector('[data-id="seconds"');
// Countdown to... (Default value is 14 day from the present time)
const targetDate = new Date().getTime() + 3600 * 1000 * 24 * 14;

// Setter
const setInnerHTML = function (element, value) {
	if (value < 10) {
		value = `0${value}`;
	}
	// If value changed then re-render with new content
	if (element.innerHTML != value) {
		element.innerHTML = value;
	}
};

// Calculator and handler
const calculateAndRender = function () {
	// Current date (now)
	const presentDate = new Date().getTime();
	// Distance between present and target date
	const distance = targetDate - presentDate;
	// Values
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	// Check current state
	if (distance < 0) {
		clearInterval(countdownInterval);
		alert("It's time to launch!!!");
	} else {
		setInnerHTML(daysBox, days);
		setInnerHTML(hoursBox, hours);
		setInnerHTML(minutesBox, minutes);
		setInnerHTML(secondsBox, seconds);
	}
};

// Run for the first time
document.addEventListener('DOMContentLoaded', calculateAndRender);
// Run the calculator function with 1 second of interval
const countdownInterval = setInterval(calculateAndRender, 1000);
