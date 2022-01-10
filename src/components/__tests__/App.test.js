import { shallow } from "enzyme";
import React from 'react';
import App from "../../App";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('check header title', () => {
    expect(wrapped.find('header').text()).toEqual('Welcome to React Boilerplate!');
})