// StringCalculator.js
class StringCalculator{
	constructor() {}
		PrintFizzOrBuzz(){
			let counterFizzBuzz = 0
			let counterFizz = 0
			
			for (let i = 1; i <= 100; i++) {
			if(i % 3 === 0 && i % 5 === 0){
				console.log("FizzBuzz")
				counterFizzBuzz++	
			}else if(i % 3 == 0){
				console.log("Fizz")
				counterFizz++
			}
				
			}
			return new ReturnValues(counterFizzBuzz, counterFizz);
		}

}
 
class ReturnValues{
	constructor(FizzBuzz,Fizz) {
	this.FizzBuzz = FizzBuzz;
	this.Fizz = Fizz;		
	}
}