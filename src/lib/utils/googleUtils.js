/**
 * Initialize OAuth2 Token Client and returns OAuth2 Client
 * @param {string} clientId 
 * @param {function} callback
 * @param {string} uxMode
 * @param {string} scope
 * @returns {object | null}
 */
function initializeGoogle(clientId, callback, uxMode = 'popup', scope = 'email profile openid') {
  const { google } = window;

  if (!google) return;

  const OAuth2 = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    ux_mode: uxMode,
    scope,
    callback
  });

  return OAuth2;
}

/**
 * Authenticates user
 * @param {object} OAuth2Client 
 * @returns {void}
 */
function authenticateUser(OAuth2Client) {
  OAuth2Client.requestAccessToken();
}

const GoogleService = {
  initializeGoogle,
  authenticateUser
};

export default GoogleService;
