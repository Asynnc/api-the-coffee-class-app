export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: object,
  token: string
}
