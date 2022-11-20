import {ColorType} from '@/styles/styled';
import React, {ReactNode} from 'react';
import styled, {css} from 'styled-components/native';

interface IProps {
  dir?: 'row' | 'column';
  flex?: number;
  bgColor?: ColorType;
  padding?: string;
  margin?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  children?: ReactNode;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
}
function FlexWrap({dir = 'row', children, ...viewProps}: IProps) {
  return (
    <Container dir={dir} {...viewProps}>
      {children}
    </Container>
  );
}
const Container = styled.View<IProps>`
  display: flex;
  flex-direction: ${props => props.dir};
  background-color: ${props =>
    (props.bgColor && props.theme.colors[props.bgColor]) || 'transparent'};
  padding: ${props => props.padding || 0};
  margin: ${props => props.margin || 0};
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
  justifycontent: ${props => props.justifyContent || 'flex-start'};
  alignitemts: ${props => props.alignItems || 'flex-start'};
`;
export default FlexWrap;
