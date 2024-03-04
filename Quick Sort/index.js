function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[arr.length - 1];
	let rightArr = [];
	let leftArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > pivot) {
			rightArr.push(arr[i]);
		} else {
			leftArr.push(arr[i]);
		}
	}
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]

// Big-O = O(n^2) worst case
// Big-O = O(nlogn) avg case
