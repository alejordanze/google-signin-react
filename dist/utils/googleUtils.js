"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Initialize OAuth2 Token Client and returns OAuth2 Client
 * @param {string} clientId 
 * @param {function} callback
 * @param {string} uxMode
 * @param {string} scope
 * @returns {object | null}
 */
function initializeGoogle(clientId, callback) {
  let uxMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'popup';
  let scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'email profile openid';
  const {
    google
  } = window;
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
var _default = GoogleService;
exports.default = _default;