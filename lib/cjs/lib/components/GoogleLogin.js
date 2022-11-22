"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var useLoadGoogleScript_1 = __importDefault(require("../hooks/useLoadGoogleScript"));
var fetchUtils_1 = require("../utils/fetchUtils");
var googleUtils_1 = __importDefault(require("../utils/googleUtils"));
require("./GoogleLogin.module.css");
var google_icon_png_1 = __importDefault(require("../assets/google-icon.png"));
var GoogleLogin = function (_a) {
    var clientId = _a.clientId, containerClass = _a.containerClass, onSuccess = _a.onSuccess, children = _a.children, scope = _a.scope, uxMode = _a.uxMode;
    var _b = (0, react_1.useState)(null), OAuth2Client = _b[0], setOAuth2Client = _b[1];
    var _c = (0, react_1.useState)(null), googleResponse = _c[0], setGoogleResponse = _c[1];
    var scriptLoadedSuccessfully = (0, useLoadGoogleScript_1.default)();
    var initializeCallback = function (response) {
        if (response.error)
            console.error('error: ', response);
        (0, fetchUtils_1.fetchUserData)(response.access_token)
            .then(function (data) { return setGoogleResponse(data); });
    };
    (0, react_1.useMemo)(function () {
        var OAuth2 = googleUtils_1.default.initializeGoogle(clientId, initializeCallback, uxMode, scope);
        setOAuth2Client(OAuth2);
    }, [scriptLoadedSuccessfully]);
    var authUser = function () {
        if (!OAuth2Client)
            return;
        googleUtils_1.default.authenticateUser(OAuth2Client);
    };
    (0, react_1.useEffect)(function () {
        if (!googleResponse)
            return;
        onSuccess(googleResponse);
    }, [googleResponse]);
    if (!children)
        return (react_1.default.createElement("div", { className: "google-button", onClick: authUser },
            react_1.default.createElement("img", { src: google_icon_png_1.default, className: "icon" }),
            react_1.default.createElement("span", { className: "text" }, "Sign In with Google")));
    return (react_1.default.createElement("div", { onClick: authUser, className: containerClass }, children));
};
GoogleLogin.propTypes = {
    clientId: prop_types_1.default.string.isRequired,
    containerClass: prop_types_1.default.string,
    onSuccess: prop_types_1.default.func.isRequired,
    uxMode: prop_types_1.default.oneOf(['popup', 'redirect']),
    scope: prop_types_1.default.string,
    children: prop_types_1.default.element
};
GoogleLogin.defaultProps = {
    containerClass: undefined,
    uxMode: undefined,
    scope: undefined,
    children: undefined
};
exports.default = GoogleLogin;
