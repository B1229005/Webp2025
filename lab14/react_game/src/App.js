import React from 'react';
import MultiButton from './cgu_multiButton';
import CGU_Login from './cgu_login';

const styleArgument = { fontSize: '100px', color: 'red' };

function App() {
  return (
    <div classname="APP">
      <div>
        {CGU_Login()}
      </div>
    </div>
  );
}

export default App;
