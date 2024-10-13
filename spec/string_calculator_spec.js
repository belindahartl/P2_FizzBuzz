describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return FizzBuzz 6 times', function() {
		let result = calculator.PrintFizzOrBuzz()
		expect(result.FizzBuzz).toEqual(6)
	});
	it('should return Fizz 27 times', function() {
		let result = calculator.PrintFizzOrBuzz()
		expect(result.Fizz).toEqual(27)
	});
	it('should return Buzz 14 times', function() {
		let result = calculator.PrintFizzOrBuzz()
		expect(result.Buzz).toEqual(14)
	});
	
});
