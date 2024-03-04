function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const n = prompt("Введіть n:");
console.log(`n-те число Фібоначчі з ${n} це: ${fibonacci(n)}`);
