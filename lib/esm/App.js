import React from 'react';
import './App.css';
import GoogleLogin from './lib/components/GoogleLogin';
function App() {
    var success = function (res) {
        console.log(res);
    };
    return (React.createElement("div", { className: "App" },
        React.createElement(GoogleLogin, { clientId: "802994861131-pc800ev4qrfvkundvmpoca5eulp8o8bv.apps.googleusercontent.com", onSuccess: success })));
}
export default App;
