export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  
  if (n === 2) {
    return true;
  }
  
  if (n % 2 === 0) {
    return false;
  }
  
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

export function getPrimes(limit: number): number[] {
  if (limit < 2) {
    return [];
  }
  
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

export function nthPrime(n: number): number {
  if (n < 1) {
    throw new Error('Input must be a positive integer');
  }
  
  let count = 0;
  let num = 2;
  
  while (count < n) {
    if (isPrime(num)) {
      count++;
      if (count === n) {
        return num;
      }
    }
    num++;
  }
  
  return num;
}