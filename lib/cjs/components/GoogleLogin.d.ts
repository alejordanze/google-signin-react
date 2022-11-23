/// <reference types="react" />
import PropTypes from 'prop-types';
import { GoogleLoginProps } from '../types';
declare const GoogleLogin: {
    ({ clientId, containerClass, onSuccess, onError, render, children, scope, uxMode, userInfoFetchURL }: GoogleLoginProps): JSX.Element | null;
    propTypes: {
        clientId: PropTypes.Validator<string>;
        onSuccess: PropTypes.Validator<(...args: any[]) => any>;
        onError: PropTypes.Validator<(...args: any[]) => any>;
        containerClass: PropTypes.Requireable<string>;
        render: PropTypes.Requireable<(...args: any[]) => any>;
        uxMode: PropTypes.Requireable<string>;
        scope: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        userInfoFetchURL: PropTypes.Requireable<string>;
    };
    defaultProps: {
        containerClass: undefined;
        render: undefined;
        uxMode: undefined;
        scope: undefined;
        children: undefined;
        userInfoFetchURL: undefined;
    };
};
export default GoogleLogin;
