function makePromiseFactory (promiseAction) {
	return function(x) {
		return new Promise((resolve) => {
			promiseAction(x, resolve)
		})
	}
}

Promise.reduce = function(promiseFactories) {
	return promiseFactories.reduce((a, b) => {
		return function() {
			return a().then(ret => {
				return b(ret);
			})
		}
	})()
}

let p1 = makePromiseFactory((x, resolve) => {
	setTimeout(() => {
		console.log(1);
		resolve(1);
	}, 1000)
})

let p2 = makePromiseFactory((x, resolve) => {
	setTimeout(() => {
		console.log(2);
		resolve(2 + x);
	}, 1000)
})

let p3 = makePromiseFactory((x, resolve) => {
	setTimeout(() => {
		console.log(3);
		resolve(3 + x);
	}, 1000)
})

Promise.reduce([p1, p2, p3]).then(ret => console.log(ret));