import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

import Text from '@components/common/Text';
import {theme} from '@/styles/theme';
import FasIconBtn from '@components/common/FasIconBtn';

export interface IInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
}
function Input({label, secureText, ...inputProps}: IInputProps) {
  const [isLocked, setIsLocked] = useState(!!secureText);
  const onToggleLock = () => {
    setIsLocked(!isLocked);
  };
  return (
    <>
      {label && <Text text={label} margin="0 0 8px" fontSize="s" />}
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
