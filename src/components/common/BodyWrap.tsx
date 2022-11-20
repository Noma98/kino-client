import {theme} from '@/styles/theme';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IProps {
  children?: ReactNode;
  hasPadding?: boolean;
  bgColor?: string;
}
function BodyWrap({
  children,
  hasPadding = true,
  bgColor = theme.colors.bgDark,
}: IProps) {
  return (
    <StyledSafeAreaView bgColor={bgColor} hasPadding={hasPadding}>
      {children}
    </StyledSafeAreaView>
  );
}
const StyledSafeAreaView = styled.SafeAreaView<{bgColor: string,hasPadding:boolean}>`
  flex: 1;
  padding: ${props=>props.hasPadding?'20px':0}
  background-color: ${props => props.bgColor};
`;
export default BodyWrap;
