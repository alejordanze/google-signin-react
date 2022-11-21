import React from 'react';
import './App.css';
import GoogleLogin from './lib/components/GoogleLogin';

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId=""
        onSuccess={(res) => console.log(res)}
      />
    </div>
  );
}

export default App;
