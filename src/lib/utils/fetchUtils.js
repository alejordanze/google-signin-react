const GOOGLE_API_URL = 'https://www.googleapis.com/oauth2/v3/userinfo?grant_type=authorization_token'

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
async function fetchUserData(accessToken) {
  return fetch(GOOGLE_API_URL, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error('Fetch user data error: ', err));   
}

export {
  fetchUserData
};