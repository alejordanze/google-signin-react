/**
 * Initialize OAuth2 Token Client and returns OAuth2 Client
 * @param {string} clientId
 * @param {function} callback
 * @param {string} uxMode
 * @param {string} scope
 * @returns {object | null}
 */
function initializeGoogle(clientId, callback, uxMode, scope) {
    if (uxMode === void 0) { uxMode = 'popup'; }
    if (scope === void 0) { scope = 'email profile openid'; }
    var google = window.google;
    if (!google)
        return;
    var OAuth2 = google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        ux_mode: uxMode,
        scope: scope,
        callback: callback
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
var GoogleService = {
    initializeGoogle: initializeGoogle,
    authenticateUser: authenticateUser
};
export default GoogleService;
