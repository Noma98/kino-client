import {ISignInBody, ISignInResponse} from '@/types/api/user';
import React from 'react';
import {useMutation} from 'react-query';
import {AxiosError} from 'axios';
import {signIn} from '@/api/user';
import {
  getProfile,
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileNoneAgreement,
  login,
} from '@react-native-seoul/kakao-login';
import {Alert} from 'react-native';

interface IUseSignIn {
  localId: string;
  password: string;
}
function useSignIn({localId, password}: IUseSignIn) {
  const mutation = useMutation<ISignInResponse, AxiosError, ISignInBody>(
    payload => signIn(payload),
  );
  const signInWithKakao = async () => {
    const {idToken}: KakaoOAuthToken = await login();
    mutation.mutate({loginMethod: 'KAKAO', idToken});
  };
  const signInWithLocal = () => {
    mutation.mutate({loginMethod: 'LOCAL', localId, password});
  };
  return {signInWithKakao, signInWithLocal};
}

export default useSignIn;
