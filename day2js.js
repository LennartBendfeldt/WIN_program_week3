// function add(argsOne, argsTwo){
//     return argsOne + argsTwo;
// }

// function doMath(operation, argsOne, argsTwo){
//     return operation(argsOne, argsTwo);
// }

// console.log(doMath(add, 1, 3));










// var superHeroes = [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"],
//     ["The Flash", "Barry Allen"]
//   ]

//   var secretIdentity = superHeroes.map(function(revealArray){
//       return revealArray.join(" is ");
//   });

//   console.log(secretIdentity.join("\n"));









// // THIS IN AN ASYNC FUNCTION
let teacher = {
	name: 'Shane',
    // saving a function to the key labeled 'speak'
	speak: function() {
		//Maybe you're fetching data from an API, or getting user input
        // // set Timeout essentially delays a function by x milliseconds
        // // inner scope
		setTimeout(function(random = "david"){
            // this is referring to the object that's calling upon this THIS keyword
            console.log('this inside of setTimeout: ' + random);
			console.log('later my name is ' + this.random); //undefined
		},5000)
		
        console.log(this.name); // shane
        // look for 'this' in its immediate scope first and then move outward
		console.log('Now my name is ' + this.name); // 'Shane'
	}
}

let tomObj = {
    teacher: 'tom',
    doSomething: teacher.speak()
}
tomObj.doSomething;

// teacher.speak();
