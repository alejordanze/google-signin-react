# New Google Authentication

## Install

```sh
$ npm install google-login-react

# or

$ yarn add google-login-react
```

## Usage

### Usage with default button

```jsx
import { GoogleLogin } from 'google-login-react-ts';

const App = () => {
  return (
    <GoogleLogin
      clientId='<your_client_id>'
      onSuccess={(res) => console.log(res)}
      onError={(err) => console.log(err)}
    />
  );
}
```

### Usage with custom button

```jsx
import { GoogleLogin } from 'google-signin-react-ts';

const App = () => {
  return (
    <GoogleLogin
      clientId='<your_client_id>'
      onSuccess={(res) => console.log(res)}
      onError={(err) => console.log(err)}
      containerClass="<your_custom_class>"
    >
      <button>Google Login</button>
    </GoogleLogin>
  )
}
```

### Usage with render

```jsx
import { GoogleLogin } from 'google-signin-react-ts';

const App = () => {
  return (
    <GoogleLogin
      clientId='<your_client_id>'
      onSuccess={(res) => console.log(res)}
      onError={(err) => console.log(err)}
      containerClass="<your_custom_class>"
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>Google Login</button>
      )}
    />
  )
}
```

## Response

### Google Response

```json
  {
    "email": "...",
    "email_verified": "...",
    "family_name": "...",
    "given_name": "...",
    "locale": "...",
    "name": "...",
    "picture": "...",
    "sub": "..."
  }
```

| Property                | Type       | Description                                                                 |
| ------------------- | ---------- | --------------------------------------------------------------------------- |
| email            | `string`   | Google user email|
| email_verified | `boolean` | Google user email is verified                                  |
| family_name   | `string` | Google user family name                            |
| given_name   | `string` | Google user given name                            |
| locale   | `string` | Google user locale                           |
| name   | `string` | Google user name                           |
| picture   | `string` | Google user picture URL                           |
| sub   | `string` | Google user sub ID                           |


## API

### GoogleLogin

| Required  | Property                | Type       | Description                                                                 |
| :--------: | ------------------- | ---------- | --------------------------------------------------------------------------- |
|  ✅  | clientId            | `string`   | Google Project Client ID |
|| containerClass | `boolean` | Container className                                  |
|  ✅  | onSuccess   | `(response: GoogleResponse) => void` | Callback fires after successful login                      |
|| onError   | `(response: Error) => void` | Callback fires after unsuccessful login                      |
|| uxMode   | `popup` \| `redirect` | UX mode, right now only working with popup mode             |
|| scope   | `string` | Google [scopes](https://developers.google.com/identity/protocols/oauth2/scopes)                          |
|| children   | `element` | Element that replaces default button              |
|| render   | `({ onClick }) => void` | Render JSX Element passing onClick function      |
|| userInfoFetchURL   | `string` \| [default](https://www.googleapis.com/oauth2/v3/userinfo?grant_type=authorization_token) | URL to retrive Google User info       |
