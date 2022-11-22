"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom.iterable.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useLoadGoogleScript = _interopRequireDefault(require("../hooks/useLoadGoogleScript"));
var _fetchUtils = require("../utils/fetchUtils");
var _googleUtils = _interopRequireDefault(require("../utils/googleUtils"));
var _googleIcon = _interopRequireDefault(require("../assets/google-icon.png"));
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const GoogleLogin = _ref => {
  let {
    clientId,
    containerClass,
    onSuccess,
    children,
    scope,
    uxMode
  } = _ref;
  const [OAuth2Client, setOAuth2Client] = (0, _react.useState)(null);
  const [googleResponse, setGoogleResponse] = (0, _react.useState)(null);
  const scriptLoadedSuccessfully = (0, _useLoadGoogleScript.default)();
  const initializeCallback = response => {
    if (response.error) console.error('error: ', response);
    (0, _fetchUtils.fetchUserData)(response.access_token).then(data => setGoogleResponse(data));
  };
  (0, _react.useMemo)(() => {
    const OAuth2 = _googleUtils.default.initializeGoogle(clientId, initializeCallback, uxMode, scope);
    setOAuth2Client(OAuth2);
  }, [scriptLoadedSuccessfully]);
  const authUser = () => {
    if (!OAuth2Client) return;
    _googleUtils.default.authenticateUser(OAuth2Client);
  };
  (0, _react.useEffect)(() => {
    if (!googleResponse) return;
    onSuccess(googleResponse);
  }, [googleResponse]);
  if (!children) return /*#__PURE__*/_react.default.createElement("div", {
    className: "google"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _googleIcon.default,
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text"
  }, "Sign In with Google"));
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: authUser,
    className: containerClass
  }, children);
};
GoogleLogin.propTypes = {
  clientId: _propTypes.default.string.isRequired,
  containerClass: _propTypes.default.string,
  onSuccess: _propTypes.default.func.isRequired,
  uxMode: _propTypes.default.oneOf(['popup', 'redirect']),
  scope: _propTypes.default.string,
  children: _propTypes.default.element
};
GoogleLogin.defaultProps = {
  containerClass: undefined,
  uxMode: undefined,
  scope: undefined,
  children: undefined
};
var _default = GoogleLogin;
exports.default = _default;