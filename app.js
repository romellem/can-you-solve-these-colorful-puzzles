var range = function(length) {
	return [...Array(length).keys()];
};

/**
 * I could have done:
 *     
 *     var allSame = (a) => [...new Set(a)].length === 1;
 *     
 * But this isn't code golf, regular for loop is way faster.
 * 
 * @see https://jsperf.com/same-elements-in-array-for-vs-set-spread
 * @param  array a
 * @return bool
 */
var allSame = function(a) {
	var temp;
	for (var i = 0; i < a.length; i++) {
		if (typeof temp === 'undefined') {
			temp = a[i];
		} else {
			if (temp !== a[i]) {
				return false;
			}
		}
	}

	return true;
};

var getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @param  array box - example array: [1, 2, 3, 4]
 * @return int
 */
function game(box) {
	var turns = 0;

	while (!allSame(box)) {
		var ball1 = box.splice(getRandomInt(0, box.length), 1)[0];
		var ball2 = box.splice(getRandomInt(0, box.length), 1)[0];

		// "paint over" ball 2
		ball2 = ball1;

		box.push(ball1);
		box.push(ball2);

		turns++;
	}

	return turns;
}

function simulate(box) {
	var SIMLUATIONS = 1000000;
	var total_turns = 0;

	for (var s = 0; s < SIMLUATIONS; s++) {
		total_turns += game(box.slice(0));
	}

	console.log(box.join(','));
	console.log(total_turns / SIMLUATIONS);
	console.log('\n');
}

console.log('Running...\n');
for (let i = 2; i < 10; i++) {
	simulate(range(i));
}