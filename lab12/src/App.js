import React from 'react';
import MultiButton from './cgu_multiButton';

const styleArgument = { fontSize: '100px', color: 'red' };

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <div style={styleArgument}>hello CGU!!</div>
      <div>{MultiButton(10)}</div>
    </div>
  );
}

export default App;
