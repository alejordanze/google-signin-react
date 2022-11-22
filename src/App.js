import React from 'react';
import './App.css';
import GoogleLogin from './lib/components/GoogleLogin';

function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId="802994861131-pc800ev4qrfvkundvmpoca5eulp8o8bv.apps.googleusercontent.com"
        onSuccess={(res) => console.log(res)}
      >
        <div className="google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" className="icon"></img>
          <span className="text">Sign In with Google</span>
        </div>
      </GoogleLogin>
    </div>
  );
}

export default App;
