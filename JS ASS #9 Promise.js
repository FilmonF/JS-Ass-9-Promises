

// TAsk No. 1

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log("Resolved after 2 seconds");
});

// TAsk No. 2

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      resolve(randomNum);
    }, 2000);
  });
}

fetchData()
.then(data => console.log(data));


// task No. 3

function processData(data) {
  console.log(data); 

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data * 2); 
    }, 1000);
  });
}
processData(5)
.then(result => console.log(result)); 

// Task No. 4

fetchData()
  .then(data => {
    console.log("Fetched data:", data);
    return processData(data);
  })
  .then(processedData => {
    console.log("Processed data:", processedData);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });









