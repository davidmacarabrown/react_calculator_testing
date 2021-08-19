import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add numbers', () => {

    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addition = container.find('#operator-add');
    const equals = container.find('#operator-equals');

    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    addition.simulate('click');
    button4.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('5')
  })

  it('should be able to subtract numbers', () => {

    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subtraction = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button7.simulate('click');
    subtraction.simulate('click');
    button4.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('3');
  })

  it ('should be able to multiply numbers', () => {
    
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplication = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    multiplication.simulate('click');
    button5.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide numbers', () => {

    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const division = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    division.simulate('click');
    button7.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to track multiple input clicks', () => {

    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');

    button5.simulate('click');
    button5.simulate('click');

    expect(runningTotal.text()).toEqual('55');
  })

  it('should be able to carry out chained operations', () => {
    
    const addition = container.find('#operator-add');
    const multiplication = container.find('#operator-multiply');
    const button1 = container.find('#number1');
    const button7 = container.find('#number9');
    const button9 = container.find('#number7');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button9.simulate('click');
    multiplication.simulate('click');
    button7.simulate('click');
    addition.simulate('click');
    button1.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('64')
  })

  it('should be able to handle a clear operation without affecting the running total from a previous calculation', () => {

    const button8 = container.find('#number8');
    const addition = container.find('#operator-add');
    const equals = container.find('#operator-equals');
    const clear = container.find('#clear');
    const runningTotal = container.find('#running-total');

    button8.simulate('click');
    addition.simulate('click');
    button8.simulate('click');
    addition.simulate('click');
    button8.simulate('click');
    clear.simulate('click');
    equals.simulate('click');

    expect(runningTotal.text()).toEqual('16')
  })
})

