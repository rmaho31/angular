let numbers: number[] = [1,3,5,7];
numbers.push(2,4,6,8);
console.log(numbers);

numbers[numbers.length] = 100;

console.log(numbers);
numbers.pop();

console.log(numbers);

numbers.splice(2,1);

console.log(numbers);