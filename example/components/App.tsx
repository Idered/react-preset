import * as React from 'react';
import { PresetContext } from '../../src';
import Button from './Button';
import preset from '../preset';

const App = () => (
  <PresetContext.Provider value={preset}>
    <Button preset="cancel" />
    <Button preset="save" marginLeft={12} />
    <Button preset="save" marginLeft={12} intent="none">
      Archive
    </Button>
  </PresetContext.Provider>
);

export default App;
