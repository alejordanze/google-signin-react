import React from 'react';
import './App.css';
import GoogleLogin from './lib/components/GoogleLogin';

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId="802994861131-pc800ev4qrfvkundvmpoca5eulp8o8bv.apps.googleusercontent.com"
        onSuccess={(res) => console.log(res)}
      />
    </div>
  );
}

export default App;
