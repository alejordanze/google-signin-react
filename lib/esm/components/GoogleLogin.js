import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useLoadGoogleScript from '../hooks/useLoadGoogleScript';
import { fetchUserData } from '../utils/fetchUtils';
import GoogleService from '../utils/googleUtils';
import { buttonStyles } from '../assets/styles';
var GoogleLogin = function (_a) {
    var clientId = _a.clientId, containerClass = _a.containerClass, onSuccess = _a.onSuccess, onError = _a.onError, render = _a.render, children = _a.children, scope = _a.scope, uxMode = _a.uxMode, userInfoFetchURL = _a.userInfoFetchURL;
    var _b = useState(null), OAuth2Client = _b[0], setOAuth2Client = _b[1];
    var _c = useState(null), googleResponse = _c[0], setGoogleResponse = _c[1];
    var scriptLoadedSuccessfully = useLoadGoogleScript();
    var isClientIdValid = function () { return (!!clientId && !!clientId.trim()); };
    var initializeCallback = function (response) {
        if (response.error)
            console.error('error: ', response);
        fetchUserData(response.access_token, userInfoFetchURL)
            .then(function (data) { return setGoogleResponse(data); });
    };
    useMemo(function () {
        if (!isClientIdValid())
            return;
        var OAuth2 = GoogleService.initializeGoogle(clientId, initializeCallback, onError, uxMode, scope);
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
    if (!isClientIdValid())
        return null;
    if (render && typeof render === 'function') {
        return render({ onClick: authUser });
    }
    if (!children)
        return (React.createElement("div", { style: buttonStyles, onClick: authUser },
            React.createElement("span", { style: { textAlign: "center", padding: "0 20px" } }, "Sign In with Google")));
    return (React.createElement("div", { onClick: authUser, className: containerClass }, children));
};
GoogleLogin.propTypes = {
    clientId: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    containerClass: PropTypes.string,
    render: PropTypes.func,
    uxMode: PropTypes.oneOf(['popup', 'redirect']),
    scope: PropTypes.string,
    children: PropTypes.element,
    userInfoFetchURL: PropTypes.string
};
GoogleLogin.defaultProps = {
    containerClass: undefined,
    render: undefined,
    uxMode: undefined,
    scope: undefined,
    children: undefined,
    userInfoFetchURL: undefined
};
export default GoogleLogin;
