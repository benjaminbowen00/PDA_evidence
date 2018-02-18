var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  var calculator;

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should add two integers', function(){
    calculator.previousTotal = 10;
    calculator.add(5);
    assert.equal(calculator.runningTotal, 15)
  });

  it('it should add two negatives', function(){
    calculator.previousTotal = -7;
    calculator.add(-2);
    assert.equal(calculator.runningTotal, -9);
  })

  it('it should add two decimals', function(){
    calculator.previousTotal = 10.56;
    calculator.add(-2.14);
    assert.equal(calculator.runningTotal, 8.42);
  });

  it('it should subtract', function(){
    calculator.previousTotal = 10;
    calculator.subtract(6);
    assert.equal(calculator.runningTotal, 4);
  });

  it('it should subtract with negatives', function(){
    calculator.previousTotal = 10;
    calculator.subtract(-6);
    assert.equal(calculator.runningTotal, 16);
  });

  it('it should subtract zero', function(){
    calculator.previousTotal = 10.54;
    calculator.subtract(0);
    assert.equal(calculator.runningTotal, 10.54);
  });

  it('it should multiply integers', function(){
    calculator.previousTotal = 10;
    calculator.multiply(4);
    assert.equal(calculator.runningTotal, 40);
  });

  it('it should multiply two negatives', function(){
    calculator.previousTotal = -10;
    calculator.multiply(-5);
    assert.equal(calculator.runningTotal, 50);
  });

  it('it should multiply decimals', function(){
    calculator.previousTotal = 3.14;
    calculator.multiply(2.21);
    assert.equal(calculator.runningTotal, 6.9394);
  });

  it('it should multiply by zero', function(){
    calculator.previousTotal = 3.14;
    calculator.multiply(0);
    assert.equal(calculator.runningTotal, 0);
  });

  it('it should give zero when zero is multiplied by something', function(){
    calculator.previousTotal = 0;
    calculator.multiply(-2.71);
    assert.equal(calculator.runningTotal, 0);
  });

  it('it should divide integers', function(){
    calculator.previousTotal = 10;
    calculator.divide(4);
    assert.equal(calculator.runningTotal, 2.5);
  });

  it('it should divide integers giving a recurring decimal', function(){
    calculator.previousTotal = 10;
    calculator.divide(3);
    assert.equal(calculator.runningTotal, 10/3);
    assert((calculator.runningTotal - 3.333333333) < 0.00001);
  });

  it('it should give JS Infinity when dividing by zero', function(){
    calculator.previousTotal = 10;
    calculator.divide(0);
    assert.equal(calculator.runningTotal, Infinity);
  });

  it('it should give NaN when dividing by zero by zero', function(){
    calculator.previousTotal = 0;
    calculator.divide(0);
    assert(isNaN(calculator.runningTotal));
  });

  it('it should update running total from 0 when numberClick is called', function(){
    calculator.numberClick(8);
    assert.equal(calculator.runningTotal, 8);
    assert.equal(calculator.newTotal, false);
  });

  it('it should update running total when numberClick is called twice', function(){
    calculator.numberClick(8);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 85);
    assert.equal(calculator.newTotal, false);
  });

  it('it should update previous total and previous operator when operator click is called', function(){
    calculator.operatorClick('+')
    assert.equal(calculator.previousTotal, 0);
    assert.equal(calculator.previousOperator, '+');
  });

  it('it should call method and update previous total when operator click is called twice', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+')
    calculator.numberClick(7);
    calculator.operatorClick('-')
    assert.equal(calculator.previousTotal, 15);
    assert.equal(calculator.previousOperator, '-');
  });

  it('it should update previous total and reset previous operator when operator click is equals', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+')
    calculator.numberClick(7);
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 15);
    assert.equal(calculator.previousOperator, null);
  });

  it('it sets running total to zero when clearClick is called', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+')
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

  it('it sets sets previousOperator and previousTotal to null clearClick is called twice', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+')
    calculator.clearClick();
    calculator.clearClick();

    assert.equal(calculator.previousTotal, null);
    assert.equal(calculator.previousOperator, null);
  });





});
