# Testing New Google Authentication

## Install

```sh
$ npm install @react-oauth/google@latest

# or

$ yarn add @react-oauth/google@latest
```

## Usage

### Usage with default button

```jsx
import { GoogleLogin } from 'google-signin-react';

const App = () => {
  return (
    <GoogleLogin
      clientId='<your_client_id>'
      onSuccess={(res) => console.log(res)}
    />
  )
}
```

### Usage with custom button

```jsx
import { GoogleLogin } from 'google-signin-react';

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