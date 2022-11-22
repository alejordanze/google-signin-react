/**
 * Fetches user info from Google
 * @param {string} accessToken
 * @returns {Promise<{
 * name: string,
 * email: string,
 * email_verified: boolean,
 * family_name: string,
 * given_name: string,
 * locale: string,
 * name: string,
 * picture: string,
 * sub: string
 * }>}
 */
declare function fetchUserData(accessToken: string): Promise<any>;
export { fetchUserData };
