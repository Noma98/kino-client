import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

import {theme} from '@/styles/theme';
import Text from '@components/common/Text';
import FasIconBtn from '@components/common/FasIconBtn';
import FlexWrap from '@components/common/FlexWrap';

export interface IInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  required?: boolean;
}
function Input({label, secureText, required, ...inputProps}: IInputProps) {
  const [isLocked, setIsLocked] = useState(!!secureText);
  const onToggleLock = () => {
    setIsLocked(!isLocked);
  };
  return (
    <>
      <FlexWrap alignItems="flex-start">
        {label && <Text text={label} margin="0 0 8px" fontSize="s" />}
        {required && <Text text="*" color="secondary" fontWeight={700} />}
      </FlexWrap>
      <InputContainer>
        <StyledInput
          {...inputProps}
          placeholderTextColor={theme.colors.grayLight}
          secureTextEntry={isLocked}
        />
        {secureText && (
          <FasIconBtn
            iconName={isLocked ? 'lock' : 'lock-open'}
            color={theme.colors.grayLight}
            containerStyle={{
              position: 'absolute',
              right: 16,
              top: 10,
              backgroundColor: theme.colors.white,
            }}
            onPress={onToggleLock}
          />
        )}
      </InputContainer>
    </>
  );
}
const InputContainer = styled.View``;
const StyledInput = styled.TextInput`
  background-color: white;
  padding: 8px 20px;
  font-size: ${props => props.theme.textSize.s}px;
  border-radius: 30px;
  margin-bottom: 12px;
`;

export default Input;
