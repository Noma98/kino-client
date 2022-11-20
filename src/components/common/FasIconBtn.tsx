import React from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import {IconName} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  iconName: IconName;
  iconStyle?: FontAwesomeIconStyle;
  containerStyle?: ViewStyle;
  color?: string;
  onPress?: () => void;
}
function FasIconBtn({
  iconName,
  color,
  iconStyle,
  containerStyle,
  onPress,
}: IProps) {
  return (
    <StyledBtn onPress={onPress} activeOpacity={0.6} style={containerStyle}>
      <FontAwesomeIcon
        icon={['fas', iconName]}
        color={color}
        style={iconStyle}
      />
    </StyledBtn>
  );
}
const StyledBtn = styled.TouchableOpacity`
  padding: 4px;
`;
export default FasIconBtn;
