async function getData(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 3) {
        reject("ID not found");
      } else {
        console.log("Task Done");
      }
    }, timeout);
  });
}

try {
  await getData(1);

  await getData(2);

  await getData(3);

  await getData(4);

  await getData(5);
  
} catch (error) {
  console.log("ID not found");
}
