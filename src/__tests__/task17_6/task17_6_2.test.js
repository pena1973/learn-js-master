import { getMonth } from "../../task17_6/task17_6_2.js";

// проверка верных ответов
describe("tests for getMonth function", () => {
  const year = new Map();
  year.set(1, 'Январь');
  year.set(2, 'Февраль');
  year.set(3, 'Март');
  year.set(4, 'Апрель');
  year.set(5, 'Май');
  year.set(6, 'Июнь');
  year.set(7, 'Июль');
  year.set(8, 'Август');
  year.set(9, 'Сентябрь');
  year.set(10, 'Октябрь');
  year.set(11, 'Ноябрь');
  year.set(12, 'Декабрь');

  for (let index = 1; index <= 12; index++) {
    it(`get month ${year.get(index)}`, () => expect(getMonth(index)).toBe(year.get(index)));
  };

  // проверка неверных ответов - неправильный номер месяца
  it(`get month 0`, () => expect(getMonth(0)).toBe('Данные неверные'));
  it(`get month 13`, () => expect(getMonth(13)).toBe('Данные неверные'));

  // проверка corner case
  it(`get month minus number`, () => expect(getMonth(-1)).toBe('Данные неверные'));
  it(`get month array`, () => expect(getMonth([])).toBe('Данные неверные'));
  it(`get month NaN`, () => expect(getMonth(NaN)).toBe('Данные неверные'));
  it(`get month object`, () => expect(getMonth({})).toBe('Данные неверные'));
  it(`get month undefined`, () => expect(getMonth(undefined)).toBe('Данные неверные'));
  it(`get month null`, () => expect(getMonth(null)).toBe('Данные неверные'));

  // проверка corner case когда на вход влетает не цифра, а строка с цифрой
  for (let index = 1; index <= 12; index++) {
    it(`get month string ${year.get(index)}`, () => expect(getMonth('' + index)).toBe('Данные неверные'));
  }
});



