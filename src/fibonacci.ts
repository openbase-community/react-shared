export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  
  if (n <= 1) {
    return n;
  }
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

export function fibonacciSequence(count: number): number[] {
  if (count < 0) {
    throw new Error('Count must be a non-negative integer');
  }
  
  if (count === 0) return [];
  if (count === 1) return [0];
  
  const sequence = [0, 1];
  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}