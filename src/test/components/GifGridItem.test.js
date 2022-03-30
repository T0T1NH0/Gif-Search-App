import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
  let url = 'https://';
  let title = 'un titulo';
  let wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p').text();
    expect(p).toEqual(title);
  });

  test('Debe tener la imagen igual al url y alt', () => {
    const img = wrapper.find('img');
    console.log(img);
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe contener animate__fadeIn en el className', () => {
    const div = wrapper.find('div').props();
    // console.log();
    expect(div.className.slice(23, 38)).toBe('animate__fadeIn');
  });
});
