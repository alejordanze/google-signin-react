declare global {
  interface Window {
    google: any;
  }
}

/**
 * Initialize OAuth2 Token Client and returns OAuth2 Client
 * @param {string} clientId 
 * @param {function} callback
 * @param {string} uxMode
 * @param {string} scope
 * @returns {object | null}
 */
function initializeGoogle(clientId: string, callback: Function, callbackError: Function, uxMode = 'redirect', scope = 'email profile openid'): any {
  const { google } = window;

  if (!google) return;

  const OAuth2 = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    ux_mode: uxMode,
    scope,
    callback,
    error_callback: callbackError
  });

  return OAuth2;
}

/**
 * Authenticates user
 * @param {object} OAuth2Client 
 * @returns {void}
 */
function authenticateUser(OAuth2Client: any): void {
  OAuth2Client.requestAccessToken();
}

const GoogleService = {
  initializeGoogle,
  authenticateUser
};

export default GoogleService;
