import React from 'react';
import styled from 'styled-components/native';

import FlexWrap from '@components/common/FlexWrap';
import Text from '@components/common/Text';

interface viewProps {
  height?: string;
  margin?: string;
  color?: string;
  centerText?: string;
}
function DividingLine({centerText, margin, ...viewProps}: viewProps) {
  return (
    <>
      {centerText ? (
        <CenterLineContainer alignItems="center">
          <CenterLine />
          <Text text={centerText} margin="0 12px" />
          <CenterLine />
        </CenterLineContainer>
      ) : (
        <Line {...viewProps} margin={margin} />
      )}
    </>
  );
}
const CenterLineContainer = styled(FlexWrap)`
  margin: 20px 0;
`;
const Line = styled.View<viewProps>`
  width: 100%;
  height: ${props => props.height || '1px'};
  margin: ${props => props.margin || '20px 0'};
  background-color: ${props => props.color || props.theme.colors.gray};
`;
const CenterLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${props => props.theme.colors.gray};
`;
export default DividingLine;
