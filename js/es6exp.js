// var range test
function getValue(condition) {
	if (condition) {
		//var v = "blue";
		let v = "blue";
		console.log(v);
	} else {
		console.log(v);
	}
	console.log(v);
}

//getValue(false);


// var in loops
function varInLoop()
{
	var funcs = [];

	for (var i = 0; i < 10; ++i) {
		//let v = i;
		funcs.push(function() {
			console.log(i);
			// console.log(v);
		});
	}

	funcs.forEach(function(func) {
		func();
	});
}

//varInLoop();

function varInLoop2()
{
	var funcs = [];

	for (var i = 0; i < 10; ++i) {
		funcs.push(function(v) {
			return function() {
				console.log(v);
			};
		}(i));
	}

	funcs.forEach(function(func) {
		func();
	});
}

//varInLoop2();
