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
export interface ILocalSignUpBody {
  localId: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
export interface IKakaoSignUpBody {
  nickname: string;
  profileImageUrl: string;
  kakaoId: string;
}
