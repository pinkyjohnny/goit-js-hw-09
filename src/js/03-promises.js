

const form = document.querySelector('.form');


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const delay = parseFloat(form.delay.value);
  const step = parseFloat(form.step.value);
  const amount = parseFloat(form.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay + (position - 1) * step)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      });
  }
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.3) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}
