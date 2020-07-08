let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
// anything that has a data-time attribute 
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  
  const now = Date.now(); // now is in milliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Every single second, we need to display the amount of time left
  countdown = setInterval(() => {
    // we need to figure out is how much time is left on the clock
    // "then" which is when it stops
    const secondsLeft = Math.round((then - Date.now()) / 1000); // For milliseconds
    // we're gonna run it immediately once and then once again every single time that we do that interval
    displayTimeLeft(seconds);
    
    // check if we should stop it!
    // <= 0이 아닌 < 0인 이유는 setInterval does not run immediately.
    // It has to wait for the first second to elapse
    // So we will create a second function called displayTimeLeft which takes in seconds and there we're going to write console.log(seconds)
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  // display time left and start working with converting it to minutes
  const minutes = Math.floor(seconds / 60);
  // how many seconds left
  const remainderSeconds = seconds % 60;
  // 03분처럼 자리를 맞춰주기 위한 구문
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display; // browser title
  timerDisplay.textContent = display;
}

// function which is showing the ending time
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
})
