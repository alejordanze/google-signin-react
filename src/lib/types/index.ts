import { ReactNode } from "react";

export type GoogleLoginProps = {
  clientId: string;
  containerClass: string;
  onSuccess: Function;
  onError: Function;
  render: ({ onClick }: { onClick: Function }) => JSX.Element;
  children: ReactNode;
  scope: string;
  uxMode: string;
  userInfoFetchURL: string;
};

export type GoogleUserInfo = {
  name: string;
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  picture: string;
  sub: string;
};