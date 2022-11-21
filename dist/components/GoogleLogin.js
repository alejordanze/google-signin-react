"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fetchUtils = require("../utils/fetchUtils");
var _googleUtils = _interopRequireDefault(require("../utils/googleUtils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const GoogleLogin = _ref => {
  let {
    clientId,
    children,
    containerClass,
    onSuccess
  } = _ref;
  const [OAuth2Client, setOAuth2Client] = (0, _react.useState)(null);
  const [googleResponse, setGoogleResponse] = (0, _react.useState)(null);
  const authUser = () => {
    _googleUtils.default.authenticateUser(OAuth2Client);
  };
  (0, _react.useEffect)(() => {
    console.log('Were on google button');
    const {
      google
    } = window;
    if (!google) return;
    const OAuth2 = _googleUtils.default.initializeGoogle(clientId, res => {
      if (res.error) console.log('error: ', res);
      (0, _fetchUtils.fetchUserData)(res.access_token).then(response => setGoogleResponse(response));
      console.log(res);
    });
    setOAuth2Client(OAuth2);
  }, []);
  (0, _react.useEffect)(() => {
    console.log(googleResponse);
    onSuccess(googleResponse);
  }, [googleResponse]);
  if (!children) return /*#__PURE__*/_react.default.createElement("button", {
    onClick: authUser,
    className: "defaultButton"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Sign In with Google"));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: containerClass
  }, "children");
};
var _default = GoogleLogin;
exports.default = _default;