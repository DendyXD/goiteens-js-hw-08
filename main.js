// Завдання 1

const result1 = document.querySelector("#result1");

let num1 = 1;

while (num1 < 10) {
    num1 += 1;
    result1.textContent += " " + num1;
}
// Завдання 2

const result2 = document.querySelector("#result2");

for (let i = 1; i < 21; i += 1) {
    if (i % 2 === 0) {
    result2.textContent += " " + i;
  } else {
    continue;
  }
}

// Завдання 3

const result3 = document.querySelector("#result3");

for (let i = 1; i < 11; i += 1) {
    result3.textContent += `${i} * 7 =` + i * 7 + " ";
}

// Завдання 4

const result4 = document.querySelector("#result4");

const numbers1 = [1, 2, 3, 4, 5];

let cycle1 = 0;

while (cycle1 < 5) {
  result4.textContent += numbers1[cycle1] + " ";
  cycle1 += 1;
}

// Завдання 5

const result5 = document.querySelector("#result5");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i += 1) {

  if (i === 6) {
      continue
  } else {
    result5.textContent += numbers2[i] + " ";
    }
}

// Завдання 6

const result6 = document.querySelector("#result6");

const n = 8;

let cycle2 = 1;

while (cycle2 <= n - 1) {
  result6.textContent += cycle2 + " ";
  cycle2 += 1;
}

// Завдання 7

const result7 = document.querySelector("#result7");

let cycle3 = 1;

while (cycle3 <= 20) {

  if (cycle3 % 3 === 0) {
    result7.textContent += cycle3 + " ";
  } else {
    cycle3 += 1;
    continue
  }

  cycle3 += 1;
}