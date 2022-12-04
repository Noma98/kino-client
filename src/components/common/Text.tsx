import React from 'react';
import styled from 'styled-components/native';

import {ColorType, FontSizeType, FontWeightType} from '@/styles/styled';
import {TextProps} from 'react-native';

interface IPropsText extends TextProps {
  text: string;
  fontSize?: FontSizeType;
  color?: ColorType;
  padding?: string;
  margin?: string;
  center?: boolean;
  fontWeight?: FontWeightType;
}
function Text({text, ...inputProps}: IPropsText) {
  return <StyledText {...inputProps}>{text}</StyledText>;
}
const StyledText = styled.Text<IPropsText>`
  font-size: ${props =>
    props.fontSize
      ? props.theme.textSize[props.fontSize]
      : props.theme.textSize.m}px;
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  color: ${props =>
    (props.color && props.theme.colors[props.color]) ||
    props.theme.colors.white};
  font-weight: ${props => props.fontWeight || 400};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
export default Text;
