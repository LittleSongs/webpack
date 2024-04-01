import count from './js/count';
import sum from './js/sum';
import './css/index.css';

const result = sum(1, 99)();
console.log(result); // 3

console.log(sum(1, 2)); // 3
console.log(count(2, 1)); // 1