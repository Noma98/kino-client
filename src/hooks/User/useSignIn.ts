import {IKakaoSignUpBody, ISignInBody, ISignInResponse} from '@/types/api/user';
import React from 'react';
import {useMutation} from 'react-query';
import {AxiosError} from 'axios';
import {kakaoSignUp, signIn} from '@/api/user';
import {
  getProfile,
  KakaoOAuthToken,
  KakaoProfile,
  KakaoProfileNoneAgreement,
  login,
} from '@react-native-seoul/kakao-login';
import {Alert} from 'react-native';

import {IError} from '@/types/api/common';
import useStorageToken from '@/hooks/User/useStorageToken';

interface IUseSignIn {
  localId: string;
  password: string;
}
function useSignIn({localId, password}: IUseSignIn) {
  const {setStorageToken} = useStorageToken();
  const kakaoSignUpMutation = useMutation<
    number,
    AxiosError<IError>,
    IKakaoSignUpBody
  >(payload => kakaoSignUp(payload), {
    retry: false,
    onSuccess: () => {
      Alert.alert(
        'Kino',
        '가입에 성공하였습니다! 카카오 로그인을 클릭해 지금 바로 키노를 이용해보세요.',
        [{text: '확인'}],
      );
    },
    onError: () => {
      Alert.alert('Kino', '카카오 계정으로 회원가입하는데 실패하였습니다.', [
        {text: '확인'},
      ]);
    },
  });
  const signInMutation = useMutation<
    ISignInResponse,
    AxiosError<IError>,
    ISignInBody
  >(payload => signIn(payload), {
    retry: false,
    onSuccess: tokenInfo => {
      setStorageToken(tokenInfo);
    },
    onError: async err => {
      if (err.response?.data.code === 'U004') {
        Alert.alert(
          'Kino',
          '카카오 계정으로 가입된 기록이 없습니다. 지금 생성하시겠습니까?',
          [
            {text: '취소'},
            {
              text: '확인',
              onPress: async () => {
                const profile = (await getProfile()) as KakaoProfile;
                const {nickname, id, profileImageUrl} = profile;
                kakaoSignUpMutation.mutate({
                  nickname,
                  kakaoId: id,
                  profileImageUrl,
                });
              },
            },
          ],
        );
      }
    },
  });
  const signInWithKakao = async () => {
    const {idToken}: KakaoOAuthToken = await login();
    signInMutation.mutate({loginMethod: 'KAKAO', idToken});
  };
  const signInWithLocal = () => {
    signInMutation.mutate({loginMethod: 'LOCAL', localId, password});
  };
  return {signInWithKakao, signInWithLocal};
}

export default useSignIn;
