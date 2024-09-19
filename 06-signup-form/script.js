const readline = require('readline');

 // read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function swap(arr, pos1, pos2) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

function partition(arr, low, high, pivot) {
  let i = low, j = low;
  while (i <= high) {
    if (arr[i] > pivot) i++;
    else swap(arr, i++, j++);
  }
  return j - 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pos = partition(arr, low, high, arr[high]);
    quickSort(arr, low, pos - 1);
    quickSort(arr, pos + 1, high);
  }
}

// main
rl.question('Enter the size of the array: ', (n) => {
  n = parseInt(n);
  let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 10000));

  console.log("Generated array:", arr.join("\t"));

  let start = performance.now();
  quickSort(arr, 0, n - 1);
  let end = performance.now();

  console.log("Sorted array:", arr.join("\t"));
  console.log("Time:", (end - start) / 1000, "sec");

  rl.close();
});