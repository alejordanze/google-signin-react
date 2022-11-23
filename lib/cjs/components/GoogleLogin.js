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
var styles_1 = require("../assets/styles");
var GoogleLogin = function (_a) {
    var clientId = _a.clientId, containerClass = _a.containerClass, onSuccess = _a.onSuccess, onError = _a.onError, render = _a.render, children = _a.children, scope = _a.scope, uxMode = _a.uxMode, userInfoFetchURL = _a.userInfoFetchURL;
    var _b = (0, react_1.useState)(null), OAuth2Client = _b[0], setOAuth2Client = _b[1];
    var _c = (0, react_1.useState)(null), googleResponse = _c[0], setGoogleResponse = _c[1];
    var scriptLoadedSuccessfully = (0, useLoadGoogleScript_1.default)();
    var isClientIdValid = function () { return (!!clientId && !!clientId.trim()); };
    var initializeCallback = function (response) {
        if (response.error)
            console.error('error: ', response);
        (0, fetchUtils_1.fetchUserData)(response.access_token, userInfoFetchURL)
            .then(function (data) { return setGoogleResponse(data); });
    };
    (0, react_1.useMemo)(function () {
        if (!isClientIdValid())
            return;
        var OAuth2 = googleUtils_1.default.initializeGoogle(clientId, initializeCallback, onError, uxMode, scope);
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
    if (!isClientIdValid())
        return null;
    if (render && typeof render === 'function') {
        return render({ onClick: authUser });
    }
    if (!children)
        return (react_1.default.createElement("div", { style: styles_1.buttonStyles, onClick: authUser },
            react_1.default.createElement("span", { style: { textAlign: "center", padding: "0 20px" } }, "Sign In with Google")));
    return (react_1.default.createElement("div", { onClick: authUser, className: containerClass }, children));
};
GoogleLogin.propTypes = {
    clientId: prop_types_1.default.string.isRequired,
    onSuccess: prop_types_1.default.func.isRequired,
    onError: prop_types_1.default.func.isRequired,
    containerClass: prop_types_1.default.string,
    render: prop_types_1.default.func,
    uxMode: prop_types_1.default.oneOf(['popup', 'redirect']),
    scope: prop_types_1.default.string,
    children: prop_types_1.default.element,
    userInfoFetchURL: prop_types_1.default.string
};
GoogleLogin.defaultProps = {
    containerClass: undefined,
    render: undefined,
    uxMode: undefined,
    scope: undefined,
    children: undefined,
    userInfoFetchURL: undefined
};
exports.default = GoogleLogin;
