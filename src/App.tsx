import React from 'react';
import './App.css';
import GoogleLogin from './lib/components/GoogleLogin';

function App() {
  const success = (res: any): void => {
    console.log(res);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="802994861131-pc800ev4qrfvkundvmpoca5eulp8o8bv.apps.googleusercontent.com"
        onSuccess={success}
      />
    </div>
  );
}

export default App;
