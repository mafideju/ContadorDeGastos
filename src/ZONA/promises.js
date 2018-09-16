const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('primeira leva de dados');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('leva de dados bloqueados');
  }, 4000);
});

promise1.then(data => {
  console.log(data);
});

promise2
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.warn(error);
  });
