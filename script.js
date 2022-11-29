let storedRecords = [];
let stopper = document.getElementById('stoper');
const archiveDisplay = document.getElementsByClassName('stoper-archive')[0];
let timer;
let isStarted = false;
let seconds = 0;
let minutes = 0;
const decide = (start = false) => {
  if (start === true && isStarted === false) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      stopper.innerText = `${minutes}:${seconds}`;
    }, 1000);
    isStarted = true;
  }
  if (!isStarted) {
    clearInterval(timer);
    isStarted = false;
  }
};

const setRecord = () => {
  decide(false);
  const stopper = document.getElementById('stoper').innerText;
  storedRecords.push({id: storedRecords.length + 1, record: stopper});
};

const stopTimer = () => {
  clearInterval(timer);
  isStarted = false;
};

const retrieveRecords = () => {
  archiveDisplay.innerHTML = '';
  setRecord();
  for (records of storedRecords) {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = `${records.id} ${records.record}`;
    archiveDisplay.appendChild(newParagraph);
  }
};

const clearRecords = () => {
  archiveDisplay.innerHTML = '';
  storedRecords = [];
  stopper.innerText = '0:0';
  seconds = 0;
  minutes = 0;
  isStarted = false;
  clearInterval(timer);
};
