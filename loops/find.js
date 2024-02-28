const numbers = [1, 3, 4, 52, 34, 2];

const res = numbers.find((n) => n > 30); // (call back function)
console.log(res);

/**
 * 1. map - do work and return an array
 * 2. forEach - do work but do not return
 * 3. filter - condition fulfill return array otherwise return empty array []
 * 4. find - condition true return 1st one otherwise undefined
 * 5. reduce - one kind of sum all task
 */
