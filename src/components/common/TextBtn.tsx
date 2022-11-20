import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

import Text from '@components/common/Text';
import {ColorType, FontSizeType, FontWeightType} from '@/styles/styled';

interface IProps extends TextProps {
  text: string;
  color?: ColorType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  onPress?: () => void;
  padding?: string;
  margin?: string;
}
function TextBtn({onPress, padding = '4px', ...textProps}: IProps) {
  return (
    <StyledBtn onPress={onPress}>
      <Text padding={padding} {...textProps} />
    </StyledBtn>
  );
}
const StyledBtn = styled.TouchableHighlight``;
export default TextBtn;
