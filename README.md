# New Google Authentication

## Install

```sh
$ npm install google-login-react-ts

# or

$ yarn add google-login-react-ts
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
      containerClass="<your_custom_class>"
    >
      ...
    </GoogleLogin>
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
| email            | `string`   | Google User email|
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
|  ✅  | clientId            | `string`   | Google Project Client ID|
|| containerClass | `boolean` | Children container className                                  |
|  ✅  | onSuccess   | `(response: GoogleResponse) => void` | Callback fires after successful login                      |
|| uxMode   | `popup` \| `redirect` | UX mode, right now only working with popup mode             |
|| scope   | `string` | Google [scopes](https://developers.google.com/identity/protocols/oauth2/scopes)                          |
|| children   | `element` | Element that replaces default button              |