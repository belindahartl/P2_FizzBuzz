// StringCalculator.js
class StringCalculator{
	constructor() {}
		PrintFizzOrBuzz(){
			let counterFizzBuzz = 0
			let counterFizz = 0
			let counterBuzz = 0

			for (let i = 1; i <= 100; i++) {
			if(i % 3 === 0 && i % 5 === 0){
				console.log("FizzBuzz")
				counterFizzBuzz++	
			}else if(i % 3 == 0){
				console.log("Fizz")
				counterFizz++
			}else if(i % 5 == 0){
				console.log("Buzz")
				counterBuzz++
			}
				
			}
			return new ReturnValues(counterFizzBuzz, counterFizz, counterBuzz);
		}

}
 
class ReturnValues{
	constructor(FizzBuzz,Fizz, Buzz) {
	this.FizzBuzz = FizzBuzz;
	this.Fizz = Fizz;		
	this.Buzz = Buzz;
	}
}