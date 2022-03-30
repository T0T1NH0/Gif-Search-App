import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en <AddCategory/>', () => {
  const setCategories = jest.fn();
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('debe de mostrarse correctamente <AddCategory/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'hello world!';

    input.simulate('change', { target: value });
    expect(wrapper.find('p').text().trim()).toBe('');
  });

  test('No debe de postear la informacion submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
  });
});
