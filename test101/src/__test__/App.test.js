import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Checks for nav bar', () => {
    const app = mount(<App />)
    expect(app.find('nav').text()).toEqual("Home")
})

it('Checks for image', () => {
    const app = mount(<App />)
    expect(app.find('img').text()).toEqual('')
})
it('Checks for button', () => {
    const app = mount(<App />)
    expect(app.find('button').text()).toEqual()
})

it('Checks for input field', () => {
    const app = mount(<App />)
    expect(app.find('input').text()).toEqual()
})

it('Checks for heading', () => {
    const app = mount(<App />)
    expect(app.find('h1').text()).toEqual('Testing this page')
})
