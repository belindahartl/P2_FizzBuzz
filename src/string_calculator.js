// StringCalculator.js
class StringCalculator{
	constructor() {}
		AddTwoNumbers(number1, number2){
			if(!isNaturalNumber(number1))
				number1 = 0;
			if(!isNaturalNumber(number2))
				number2 = 0;

			return String(parseInt(number1) + parseInt(number2));
		} 
		PrintFizzOrBuzz(){
			let counter = 0;
			for (let i = 1; i <= 100; i++) {
			if(i % 3 === 0 && i % 5 === 0){
				console.log("FizzBuzz")
				counter++
				
			}
				
			}
			return counter;
		}

}
 