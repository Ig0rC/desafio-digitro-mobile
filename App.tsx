import React from 'react';
import Tasks from './src/screens/Home';
import Background from './src/components/Background';

function App(): JSX.Element {
  return (
    <Background>
      <Tasks />
    </Background>
  );
}

export default App;
