import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import useLoadGoogleScript from '../hooks/useLoadGoogleScript';
import { fetchUserData } from '../utils/fetchUtils';
import GoogleService from '../utils/googleUtils';
import { buttonStyles } from '../assets/styles';
import { GoogleLoginProps } from '../types';

const GoogleLogin = ({
  clientId, containerClass, onSuccess, onError,
  render, children, scope, uxMode, userInfoFetchURL
}: GoogleLoginProps): JSX.Element | null => {
  const [OAuth2Client, setOAuth2Client] = useState(null);
  const [googleResponse, setGoogleResponse] = useState<any>(null);
  const scriptLoadedSuccessfully = useLoadGoogleScript();

  const isClientIdValid = (): boolean => (!!clientId && !!clientId.trim());

  const initializeCallback = (response: any): void => {
    if (response.error) console.error('error: ', response);

    fetchUserData(response.access_token, userInfoFetchURL)
      .then((data) => setGoogleResponse(data));
  };

  useMemo((): void => {
    if (!isClientIdValid()) return;

    const OAuth2 = GoogleService.initializeGoogle(clientId, initializeCallback, onError, uxMode, scope);

    setOAuth2Client(OAuth2);
  }, [scriptLoadedSuccessfully]);

  const authUser = () => {
    if (!OAuth2Client) return;

    GoogleService.authenticateUser(OAuth2Client);
  };

  useEffect((): void => {
    if (!googleResponse) return;

    onSuccess(googleResponse);
  }, [googleResponse]);

  if (!isClientIdValid()) return null;

  if (render && typeof render === 'function') {
    return render({ onClick: authUser });
  }

  if (!children) return (
    <div style={buttonStyles} onClick={authUser}>
      <span style={{ textAlign: "center", padding: "0 20px" }}>Sign In with Google</span>
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
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func,
  containerClass: PropTypes.string,
  render: PropTypes.func,
  uxMode: PropTypes.oneOf(['popup', 'redirect']),
  scope: PropTypes.string,
  children: PropTypes.element,
  userInfoFetchURL: PropTypes.string
};

GoogleLogin.defaultProps = {
  onError: () => {},
  containerClass: undefined,
  render: undefined,
  uxMode: undefined,
  scope: undefined,
  children: undefined,
  userInfoFetchURL: undefined
};

export default GoogleLogin;
