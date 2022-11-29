storedRecords = [];

const setRecord = () => {
    const timer = document.getElementById('stoper').innerText;
  storedRecords.push({id: storedRecords.length + 1, record: timer});
};

const retrieveRecords = () => {
  const archiveDisplay = document.getElementsByClassName('stoper-archive')[0];
  archiveDisplay.innerHTML ="";
    for(records of storedRecords){
        const newParagraph = document.createElement('p');
        newParagraph.innerText = `${records.id} ${record.record}`
        archiveDisplay.appendChild(newParagraph);
    }
};
