import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import './GoogleLogin.module.css';
interface GoogleLoginProps {
    clientId: string;
    containerClass: string;
    onSuccess: Function;
    children: ReactNode;
    scope: string;
    uxMode: string;
}
declare const GoogleLogin: {
    ({ clientId, containerClass, onSuccess, children, scope, uxMode }: GoogleLoginProps): JSX.Element;
    propTypes: {
        clientId: PropTypes.Validator<string>;
        containerClass: PropTypes.Requireable<string>;
        onSuccess: PropTypes.Validator<(...args: any[]) => any>;
        uxMode: PropTypes.Requireable<string>;
        scope: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    defaultProps: {
        containerClass: undefined;
        uxMode: undefined;
        scope: undefined;
        children: undefined;
    };
};
export default GoogleLogin;
