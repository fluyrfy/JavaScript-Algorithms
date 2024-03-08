function cartesianProduct(arr1, arr2) {
	let product = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let temp = [arr1[i], arr2[j]];
			product.push(temp);
		}
	}
	return product;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Big-O = O(mn)
