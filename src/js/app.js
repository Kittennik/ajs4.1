import quantity from './quantity';

export default function typeChecking(str) {
  try {
    const number = parseInt(str, 10);
    if ((!Number.isNaN(number)) && (number > 0)) {
      return number;
    } throw new Error();
  } catch (e) {
    return Error('Полученные данные не являются числом в десятичной форме');
  }
}

typeChecking(quantity);
