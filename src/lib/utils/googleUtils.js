function initializeGoogle(clientId, callback, ux_mode = 'popup', customScope = null) {
  const { google } = window;

  if (!google) return;

  return google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    ux_mode,
    scope: customScope || 'email profile openid',
    callback
  });
}

function authenticateUser(OAuth2Client) {
  OAuth2Client.requestAccessToken();
}

const GoogleService = {
  initializeGoogle,
  authenticateUser
};

export default GoogleService;
