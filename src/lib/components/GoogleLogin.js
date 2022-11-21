import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../utils/fetchUtils';
import GoogleService from '../utils/googleUtils';

const GoogleLogin = ({ clientId, children, containerClass, onSuccess }) => {
  const [OAuth2Client, setOAuth2Client] = useState(null);
  const [googleResponse, setGoogleResponse] = useState(null);

  const authUser = () => {
    GoogleService.authenticateUser(OAuth2Client);
  }

  useEffect(() => {
    console.log('Were on google button')
    const { google } = window;

    if (!google) return;

    const OAuth2 = GoogleService.initializeGoogle(clientId, (res) => {
      if (res.error) console.log('error: ', res);

        fetchUserData(res.access_token)
        .then((response) => setGoogleResponse(response));

        console.log(res);
    });

    setOAuth2Client(OAuth2);    
  }, []);

  useEffect(() => {
    console.log(googleResponse);
    onSuccess(googleResponse);
  }, [googleResponse]);

  if (!children) return (
    <button onClick={authUser} className="defaultButton">
      <span>Sign In with Google</span>
    </button>
  );

  return (
    <div className={containerClass}>
      children
    </div>
  )
}

export default GoogleLogin;
