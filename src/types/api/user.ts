export interface ISignInBody {
  loginMethod: 'KAKAO' | 'LOCAL';
  idToken?: string;
  localId?: string;
  password?: string;
}
export interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
}
