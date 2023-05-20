for (let i = 1; i <= 100; i++) {
  const output =
    i % 3 === 0 && i % 5 === 0 ? "fizzbuzz" :
   ( i % 3 === 0 ? "fizz" :
    (i % 5 === 0 ? "buzz" :
    i));

  console.log(output);
}
