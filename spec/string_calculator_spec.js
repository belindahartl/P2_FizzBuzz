describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return FizzBuzz six times', function() {
		expect(calculator.PrintFizzOrBuzz()).toEqual(6)
	});
	
});
