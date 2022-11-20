import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface IProps extends TouchableOpacityProps {
  imgUrl: string;
  height: number;
  onPress: () => void;
}
function ImageBtn({imgUrl, ...btnProps}: IProps) {
  return (
    <StyledButton {...btnProps}>
      <StyledImage source={imgUrl} resizeMode="contain" />
    </StyledButton>
  );
}
const StyledButton = styled.TouchableOpacity<{height: number}>`
  height: ${props => props.height}px;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export default ImageBtn;
