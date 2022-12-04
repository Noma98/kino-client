import {postAxios} from '@/api/common';
import {ISignInBody, ISignInResponse} from '@/types/api/user';

export const signIn = async (payload: ISignInBody) => {
  const res = await postAxios<ISignInResponse, ISignInBody, null>(
    '/authentication',
    payload,
  );
  return res.data;
};
