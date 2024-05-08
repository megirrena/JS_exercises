//1.Reversed array
let array = [15, 20, 33, 4, 51];
document.getElementById("originalArray").innerText = "Original Array:" + array;
let reversedArray = array.slice().reverse();
document.getElementById("reversedArray").innerText =
  "Reversed Array:" + reversedArray;
console.log(reversedArray);

//2.Sum of array
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
document.getElementById("SumArray").innerText = "Sum of Array:" + sum;
console.log(sum);

//3.Find the max and min of array
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMax(array));
console.log(findMin(array));
document.getElementById("MinArray").innerText =
  "Min of Array:" + findMin(array);

//or,same thing for min => if (array[i] < min)
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);
document.getElementById("MaxArray").innerText = "Max of Array:" + max;

//4.Create an array of only even numbers.
function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEven(array));
document.getElementById("evenArray").innerText =
  "Even of Array:" + filterEven(array);

//5.Merge two arrays into one
let array1 = [1, 2, 3];
function mergeArray(array, array1) {
  return [...array, ...array1];
}
console.log(mergeArray(array, array1));
document.getElementById("mergeArray").innerText =
  "New Array: " + mergeArray(array, array1);

//6.Count how many times an element appears in an array.
let array2 = [1, 15, 20, 15, 33, 9, 1, 15, 6, 15, 1, 9, 15];
document.getElementById("Array2").innerText = "Array2: " + array2;

function countOccurrences(arr, element) {
  return arr.filter((x) => x === element).length;
}
console.log(countOccurrences(array2, 15));
document.getElementById("countOccurrences15").innerText =
  "Number 15 :" + countOccurrences(array2, 15);
document.getElementById("countOccurrences1").innerText =
  "Number 1 :" + countOccurrences(array2, 1);

//7.Remove duplicate elements from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(array2));
document.getElementById("removeDuplicates").innerText =
  "Remove Duplicates:" + removeDuplicates(array2);

//.8 Multiply each element of an array by a number.
function multiplyElements(arr, multiplier) {
  return arr.map((num) => num * multiplier);
}
console.log(multiplyElements(array, 2));
document.getElementById("multiplyElement").innerText =
  "Multiply  Original Array with 2:" + multiplyElements(array, 2);
