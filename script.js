let timer;
let running = false; 
let lapCounter = 0; 

function startPause() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startPauseButton').textContent = 'Start';
    running = false;
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startPauseButton').textContent = 'Pause';
    running = true;
  }
}

function updateDisplay() {
  let display = document.getElementById('display');
  let milliseconds = lapCounter * 10;
  let hours = Math.floor(milliseconds / 360000);
  milliseconds %= 360000;
  let minutes = Math.floor(milliseconds / 6000);
  milliseconds %= 6000;
  let seconds = Math.floor(milliseconds / 100);
  milliseconds %= 100;

  display.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + '.' + pad(milliseconds);
  lapCounter++;
}

function reset() {
  clearInterval(timer);
  document.getElementById('startPauseButton').textContent = 'Start';
  running = false;
  lapCounter = 0;
  document.getElementById('display').textContent = '00:00:00.000';
  document.getElementById('lapTimes').innerHTML = '';
}


function recordLap() {
  let lapTime = document.getElementById('display').textContent;
  let lapTimesList = document.getElementById('lapTimes');
  let lapItem = document.createElement('li');
  lapItem.textContent = 'Lap ' + (lapTimesList.childElementCount + 1) + ': ' + lapTime;
  lapTimesList.appendChild(lapItem);
}

function pad(num) {
  return (num < 10 ? '0' : '') + num;
}
