import React from 'react';
import {render} from '@testing-library/react-native';
describe('Should not swallow errors', ()=> {
  it('should fail because of an error', async () => {
    const App = require ('../App').default;
    const component = render(<App/>);
    const blamos = await component.findByText('blamos');
    expect(blamos).toBeDefined();
  })
})