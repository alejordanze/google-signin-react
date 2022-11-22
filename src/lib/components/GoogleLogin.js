import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import useLoadGoogleScript from '../hooks/useLoadGoogleScript';
import { fetchUserData } from '../utils/fetchUtils';
import GoogleService from '../utils/googleUtils';
import GoogleIcon from '../assets/google-icon.png';
import './styles.css';

const GoogleLogin = ({
  clientId, containerClass, onSuccess, children, scope, uxMode
}) => {
  const [OAuth2Client, setOAuth2Client] = useState(null);
  const [googleResponse, setGoogleResponse] = useState(null);
  const scriptLoadedSuccessfully = useLoadGoogleScript();

  const initializeCallback = (response) => {
    if (response.error) console.error('error: ', response);

    fetchUserData(response.access_token)
      .then((data) => setGoogleResponse(data));
  };

  useMemo(() => {
    const OAuth2 = GoogleService.initializeGoogle(clientId, initializeCallback, uxMode, scope);
    
    setOAuth2Client(OAuth2);
  }, [scriptLoadedSuccessfully]);

  const authUser = () => {
    if (!OAuth2Client) return;

    GoogleService.authenticateUser(OAuth2Client);
  };

  useEffect(() => {
    if (!googleResponse) return;

    onSuccess(googleResponse);
  }, [googleResponse]);

  if (!children) return (
    <div className="google">
      <img src={GoogleIcon} className="icon"></img>
      <span className="text">Sign In with Google</span>
    </div>
  );

  return (
    <div onClick={authUser} className={containerClass}>
      {children}
    </div>
  );
}

GoogleLogin.propTypes = {
  clientId: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
  uxMode: PropTypes.oneOf(['popup', 'redirect']),
  scope: PropTypes.string,
  children: PropTypes.element
};

GoogleLogin.defaultProps = {
  containerClass: undefined,
  uxMode: undefined,
  scope: undefined,
  children: undefined
};

export default GoogleLogin;
