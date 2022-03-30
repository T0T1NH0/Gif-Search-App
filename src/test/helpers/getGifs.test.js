import { getGifs } from '../../helpers/getGifs';

describe('pruebas en getGifs fetch', () => {
  test('debe de traer 9 elementos', async () => {
    const gifs = await getGifs('one punch');

    expect(gifs.length).toBe(9);
  });
  test('test with the property', async () => {
    const gifs = await getGifs('');
    console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
