import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();

  let amount = Number(refs.amount.value);
  let delay = Number(refs.firstDelay.value);
  let step = Number(refs.delayStep.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(data => Notify.success(data))
      .catch(data => Notify.failure(data));

    delay += step;
  }
}
