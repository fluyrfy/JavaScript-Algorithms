function memoizedClimbingStaircase(n, memo = []) {
	if (n <= 2) return n;
	if (!memo[n]) {
		memo[n] =
			memoizedClimbingStaircase(n - 1, memo) +
			memoizedClimbingStaircase(n - 2, memo);
	}
	return memo[n];
}

// Big-O = O(n)

function recursiveClimbingStaircase(n) {
	if (n === 1 || n === 2) {
		return n;
	}
	return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

// Big-O = O(n^2)

function climbingStaircase(n) {
	const noOfWays = [1, 2];
	for (let i = 2; i <= n; i++) {
		noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
	}
	return noOfWays[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O = O(n)
