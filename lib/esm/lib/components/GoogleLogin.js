import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useLoadGoogleScript from '../hooks/useLoadGoogleScript';
import { fetchUserData } from '../utils/fetchUtils';
import GoogleService from '../utils/googleUtils';
import './GoogleLogin.module.css';
import image from '../assets/google-icon.png';
var GoogleLogin = function (_a) {
    var clientId = _a.clientId, containerClass = _a.containerClass, onSuccess = _a.onSuccess, children = _a.children, scope = _a.scope, uxMode = _a.uxMode;
    var _b = useState(null), OAuth2Client = _b[0], setOAuth2Client = _b[1];
    var _c = useState(null), googleResponse = _c[0], setGoogleResponse = _c[1];
    var scriptLoadedSuccessfully = useLoadGoogleScript();
    var initializeCallback = function (response) {
        if (response.error)
            console.error('error: ', response);
        fetchUserData(response.access_token)
            .then(function (data) { return setGoogleResponse(data); });
    };
    useMemo(function () {
        var OAuth2 = GoogleService.initializeGoogle(clientId, initializeCallback, uxMode, scope);
        setOAuth2Client(OAuth2);
    }, [scriptLoadedSuccessfully]);
    var authUser = function () {
        if (!OAuth2Client)
            return;
        GoogleService.authenticateUser(OAuth2Client);
    };
    useEffect(function () {
        if (!googleResponse)
            return;
        onSuccess(googleResponse);
    }, [googleResponse]);
    if (!children)
        return (React.createElement("div", { className: "google-button", onClick: authUser },
            React.createElement("img", { src: image, className: "icon" }),
            React.createElement("span", { className: "text" }, "Sign In with Google")));
    return (React.createElement("div", { onClick: authUser, className: containerClass }, children));
};
GoogleLogin.propTypes = {
    clientId: PropTypes.string.isRequired,
    containerClass: PropTypes.string,
    onSuccess: PropTypes.func.isRequired,
    uxMode: PropTypes.oneOf(['popup', 'redirect']),
    scope: PropTypes.string,
    children: PropTypes.element
};
GoogleLogin.defaultProps = {
    containerClass: undefined,
    uxMode: undefined,
    scope: undefined,
    children: undefined
};
export default GoogleLogin;
