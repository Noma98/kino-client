import {theme} from '@/styles/theme';
import React from 'react';
import styled, {css} from 'styled-components/native';
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
  bottomFixed?: boolean;
  active?: boolean;
}
function PrimaryBtn({
  title,
  color = 'white',
  fontSize,
  fontWeight = 600,
  underlayColor = theme.colors.mainDark,
  active,
  bottomFixed,
  ...btnProps
}: BtnProps) {
  return (
    <ButtonContainer bottomFixed={bottomFixed}>
      <Button
        underlayColor={underlayColor}
        active={active}
        disabled={!active}
        bottomFixed={bottomFixed}
        {...btnProps}>
        <Text
          text={title}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      </Button>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.View<{bottomFixed?: boolean}>`
  ${props =>
    props.bottomFixed &&
    css`
      padding: 20px;
      position: absolute;
      bottom: 0;
      border-radius: 4px;
      width: 100%;
      left: 0;
    `}
`;
const Button = styled.TouchableHighlight<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin || '0'};
  background-color: ${props =>
    props.active
      ? props.bgColor || props.theme.colors.main
      : props.theme.colors.gray};
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '0'};
  border-radius: ${props =>
    props.bottomFixed ? 4 : props.borderRadius || 30}px;
  height: ${props => props.height || 50}px;
`;
export default PrimaryBtn;
