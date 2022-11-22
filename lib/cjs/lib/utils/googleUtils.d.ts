declare global {
    interface Window {
        google: any;
    }
}
/**
 * Initialize OAuth2 Token Client and returns OAuth2 Client
 * @param {string} clientId
 * @param {function} callback
 * @param {string} uxMode
 * @param {string} scope
 * @returns {object | null}
 */
declare function initializeGoogle(clientId: string, callback: Function, uxMode?: string, scope?: string): any;
/**
 * Authenticates user
 * @param {object} OAuth2Client
 * @returns {void}
 */
declare function authenticateUser(OAuth2Client: any): void;
declare const GoogleService: {
    initializeGoogle: typeof initializeGoogle;
    authenticateUser: typeof authenticateUser;
};
export default GoogleService;
