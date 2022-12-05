import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components/native';

import Kakao from '@/assets/images/Signin/kakao_login.png';
import BodyWrap from '@/components/common/BodyWrap';
import ImageBtn from '@/components/common/ImageBtn';
import DividingLine from '@/components/common/DividingLine';
import Button from '@/components/common/PrimaryBtn';
import TextBtn from '@/components/common/TextBtn';
import FlexWrap from '@/components/common/FlexWrap';
import FormInput from '@/components/common/FormInput';
import {SignInScreenProps} from '@/types/navigation';
import useSignIn from '@/hooks/User/useSignIn';

interface IProps {
  navigation: SignInScreenProps['navigation'];
}
function SignIn({navigation}: IProps) {
  const formMethods = useForm({mode: 'onBlur'});
  const {localId, password} = formMethods.watch();
  const {signInWithKakao, signInWithLocal} = useSignIn({localId, password});
  const isButtonActive = Boolean(localId && password);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <BodyWrap hasPadding>
      <LogoText>kino</LogoText>
      <Form>
        <FormInput
          formMethods={formMethods}
          placeholder="아이디"
          label="아이디"
          name="localId"
          rules={{
            required: '아이디를 입력해주세요.',
            pattern: {
              value: /^[\da-zA-Z]{5,20}$/,
              message: '최소 5자 이상의 영문/숫자 조합으로 입력해주세요.',
            },
          }}
        />
        <FormInput
          formMethods={formMethods}
          placeholder="비밀번호 (8자 이상의 영문/숫자 조합)"
          rules={{
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value: /^[\da-zA-Z]{8,20}$/,
              message: '최소 8자 이상의 영문/숫자 조합으로 입력해주세요.',
            },
          }}
          label="패스워드"
          name="password"
          secureText
        />
        <Button
          title="로그인"
          active={isButtonActive}
          onPress={formMethods.handleSubmit(signInWithLocal)}
        />
        <FlexWrap justifyContent="center">
          <TextBtn
            text="회원가입  |"
            fontSize="s"
            onPress={goToSignUp}
            margin="20px 0 0"
          />
          <TextBtn
            text="아이디 찾기  |"
            fontSize="s"
            onPress={() => {}}
            margin="20px 0 0"
          />
          <TextBtn
            text="비밀번호 찾기"
            fontSize="s"
            onPress={goToSignUp}
            margin="20px 0 0"
          />
        </FlexWrap>
        <DividingLine centerText="or" margin="20px 0" />
      </Form>
      <ImageBtn imgUrl={Kakao} onPress={signInWithKakao} height={52} />
    </BodyWrap>
  );
}
const LogoText = styled.Text`
  font-family: 'Lobster-Regular';
  color: ${props => props.theme.colors.main};
  font-size: ${props => props.theme.textSize.xxl}px;
  text-align: center;
  margin: 100px 0 20px;
`;
const Form = styled.View`
  width: 312px;
  margin: 0 auto;
`;
export default SignIn;
