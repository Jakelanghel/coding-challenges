function prime(num) {
  const arr = [];

  for (let i = 2; i <= num; i++) {
    arr.push(i);
  }

  const primes = arr.filter((dig) => {
    let factors = [];
    for (let i = 2; i <= dig; i++) {
      if (dig % i === 0) {
        factors.push(i);
      }
    }

    if (factors.length === 1) {
      return dig;
    }
  });
  return primes;
}

console.log(prime(11));
