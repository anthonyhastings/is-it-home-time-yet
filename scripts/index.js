import HomeTimeChecker from './home-time-checker';

const startTimeInput = document.querySelector('#start-time');
const updateButton = document.querySelector('#update');
const result = document.querySelector('#result');
const checker = new HomeTimeChecker({
  startTime: startTimeInput.value
});

updateButton.addEventListener('click', () => {
  const startTime = startTimeInput.value;

  if (startTime.length === 0)
    return;

  checker.updateStartTime(startTime);

  if (checker.remainingTime) {
    result.innerHTML = `It'll be home time ${checker.remainingTime}.`;
  } else {
    result.innerHTML = `You're not supposed to be in work right now!`;
  }
});
