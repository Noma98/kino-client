import React from 'react';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import BodyWrap from '@/components/common/BodyWrap';
import DividingLine from '@/components/common/DividingLine';
import FlexWrap from '@/components/common/FlexWrap';
import FormInput from '@/components/common/FormInput';
import Button from '@/components/common/PrimaryBtn';
import Text from '@/components/common/Text';
import useLocalSignUp from '@/hooks/User/useLocalSignUp';
import {theme} from '@/styles/theme';
import {SignUpScreenProps} from '@/types/navigation';

interface IProps {
  navigation: SignUpScreenProps['navigation'];
}
function SignUp({navigation}: IProps) {
  const {formMethods, isActiveButton, onSubmit} = useLocalSignUp({navigation});
  const {password} = formMethods.getValues();
  return (
    <>
      <BodyWrap>
        <Text text={`계정을 생성`} fontSize="xl" margin="20px 0 0 20px" />
        <FlexWrap alignItems="center">
          <Text text={`해주세요`} fontSize="xl" margin="0 8px 0 20px" />
          <FontAwesomeIcon
            icon={['fas', 'check']}
            color={theme.colors.main}
            size={30}
          />
        </FlexWrap>
        <Form>
          <FormInput
            formMethods={formMethods}
            placeholder="아이디"
            rules={{
              required: '아이디를 입력해주세요.',
              pattern: {
                value: /^[\da-zA-Z]{5,20}$/,
                message: '최소 5자 이상의 영문/숫자 조합으로 입력해주세요.',
              },
            }}
            label="아이디"
            name="localId"
            required
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
            label="비밀번호"
            name="password"
            secureText
            required
          />
          <FormInput
            formMethods={formMethods}
            placeholder="비밀번호 확인"
            rules={{
              required: '비밀번호를 입력해주세요.',
              validate: (value: string) =>
                value === password || '비밀번호가 일치하지 않습니다.',
            }}
            label="비밀번호 확인"
            name="passwordCheck"
            secureText
            required
          />
          <DividingLine />
          <FormInput
            formMethods={formMethods}
            placeholder="닉네임"
            rules={{
              required: '닉네임을 입력해주세요.',
            }}
            label="닉네임"
            name="nickname"
            required
          />
        </Form>
      </BodyWrap>
      <Button
        title="시작하기"
        bottomFixed
        onPress={formMethods.handleSubmit(onSubmit)}
        active={isActiveButton}
      />
    </>
  );
}
const Form = styled.View`
  width: 312px;
  margin: 50px auto;
`;
export default SignUp;
