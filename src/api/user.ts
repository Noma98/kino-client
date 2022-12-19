import {postAxios} from '@/api/common';
import {
  IKakaoSignUpBody,
  ILocalSignUpBody,
  ISignInBody,
  ISignInResponse,
} from '@/types/api/user';

export const signIn = async (payload: ISignInBody) => {
  const res = await postAxios<ISignInResponse, ISignInBody, null>(
    '/authentication',
    payload,
  );
  return res.data;
};
export const localSignUp = async (payload: ILocalSignUpBody) => {
  const res = await postAxios<number, ILocalSignUpBody, null>(
    '/signup/local',
    payload,
  );
  return res.status;
};
export const kakaoSignUp = async (payload: IKakaoSignUpBody) => {
  const res = await postAxios<number, IKakaoSignUpBody, null>(
    '/signup/oauth',
    payload,
  );
  return res.status;
};
