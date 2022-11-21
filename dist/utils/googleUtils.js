"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function initializeGoogle(clientId, callback) {
  let ux_mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'popup';
  let customScope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  const {
    google
  } = window;
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
var _default = GoogleService;
exports.default = _default;