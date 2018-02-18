var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should have working number buttons for more than one press', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('25');
  })

  it('should have operation buttons that work - add', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7');
  })

  it('should have operation buttons that work - subtract and multiply chained', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-27');
  })

  it('should have operation buttons that work - subtract and multiply chained', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-27');
  })

  it('should work for large numbers: 2x10^10 + 5', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    for(let i=0; i<10; i++){element(by.css('#number0')).click();}
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20000000005');
  })

  it('should work for large numbers: display 2x10^20', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    for(let i=0; i<20; i++){element(by.css('#number0')).click();}
    expect(running_total.getAttribute('value')).to.eventually.equal('200000000000000000000');
  })

  it('should work for decimal and negatives', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-0.25');
  })

// //updated below to show 'undefined' not 'Infinity'
//   it('should show infinity when dividing (not zero) by zero', function(){
//     running_total = element(by.css('#running_total'));
//     element(by.css('#number1')).click();
//     element(by.css('#operator_divide')).click();
//     element(by.css('#number0')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
//   })

  it('should show infinity when dividing by zero you should get undefined', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('undefined');
  })


// //can't deal with numebrs bigger than 64 bit numbers due to JS limit
//   it('should work for large numbers: calculate 2x10^20 + 5', function(){
//     running_total = element(by.css('#running_total'));
//     element(by.css('#number2')).click();
//     for(let i=0; i<20; i++){element(by.css('#number0')).click();}
//     element(by.css('#operator_add')).click();
//     element(by.css('#number5')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('200000000000000000005');
//   })

});
