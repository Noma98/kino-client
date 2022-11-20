import React from 'react';
import {Controller, FieldValues, UseFormReturn} from 'react-hook-form';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Input, {IInputProps} from '@components/common/Input';
import Text from '@components/common/Text';
import FlexWrap from '@components/common/FlexWrap';
import {theme} from '@/styles/theme';

interface IProps extends IInputProps {
  formMethods: UseFormReturn<FieldValues, any>;
  name: string;
  rules?: any;
  secureText?: boolean;
}
function FormInput({formMethods, name, rules, ...inputProps}: IProps) {
  const {
    formState: {errors},
    control,
  } = formMethods;
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({field: {onChange, value}}) => (
          <Input onChangeText={onChange} value={value} {...inputProps} />
        )}
      />
      {errors[name] && (
        <ErrorMessage alignItems="center">
          <FontAwesomeIcon
            icon={['fas', 'triangle-exclamation']}
            color={theme.colors.secondary}
          />
          <Text
            text={errors[name]?.message as string}
            color="secondary"
            fontSize="s"
            margin="0 0 0 4px"
          />
        </ErrorMessage>
      )}
    </>
  );
}
const ErrorMessage = styled(FlexWrap)`
  margin-bottom: 20px;
  padding-left: 4px;
`;
export default FormInput;
