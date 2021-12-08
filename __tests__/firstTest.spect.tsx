import React from 'react';
import {render} from '@testing-library/react-native';
describe('wow', ()=> {
  it('should wow', async () => {
    const App = require ('../App').default;
    const component = render(<App/>);
    const blamos = await component.findByText('blamos');
    expect(blamos).toBeDefined();
  })
})