import {postAxios} from '@/api/common';
  ILocalSignUpBody,

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
