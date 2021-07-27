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
})

