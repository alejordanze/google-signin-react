const GOOGLE_API_URL = 'https://www.googleapis.com/oauth2/v3/userinfo?grant_type=authorization_token'

async function fetchUserData(access_token) {
  return fetch(GOOGLE_API_URL, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error('fetch user data error: ', err));   
}

export {
  fetchUserData
};