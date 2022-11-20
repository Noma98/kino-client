import {theme} from '@/styles/theme';
import React from 'react';
import styled from 'styled-components/native';
import Text from '@components/common/Text';
import {ColorType, FontSizeType, FontWeightType} from '@/styles/styled';

interface BtnProps {
  title: string;
  fontSize?: FontSizeType;
  color?: ColorType;
  fontWeight?: FontWeightType;
  onPress?: () => void;
  underlayColor?: string;
  borderRadius?: number;
  border?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  height?: number;
}
function PrimaryBtn({
  title,
  color = 'white',
  fontSize,
  fontWeight = 600,
  underlayColor = theme.colors.mainDark,
  ...btnProps
}: BtnProps) {
  return (
    <BtnContainer underlayColor={underlayColor} {...btnProps}>
      <Text
        text={title}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </BtnContainer>
  );
}
const BtnContainer = styled.TouchableHighlight<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin || '0'};
  background-color: ${props => props.bgColor || props.theme.colors.main};
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '0'};
  border-radius: ${props => props.borderRadius || 30}px;
  height: ${props => props.height || 50}px;
`;
export default PrimaryBtn;
