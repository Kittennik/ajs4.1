import typeChecking from '../js/app';

test('Проверка на число', () => {
  const testQuantity = 5;
  const received = typeChecking(testQuantity);
  const expected = 5;
  expect(received).toBe(expected);
});

test('Проверка на строку', () => {
  const testQuantity = '5';
  const received = typeChecking(testQuantity);
  const expected = 5;
  expect(received).toBe(expected);
});

test('Проверка на текст', () => {
  const testQuantity = 'пять';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Проверка на символы', () => {
  const testQuantity = '-76р%';
  const received = typeChecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});
