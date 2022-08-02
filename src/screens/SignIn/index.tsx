import {SignInScreenProps} from '@/types/navigation';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IProps {
  navigation: SignInScreenProps['navigation'];
}
function SignIn({navigation}: IProps) {
  return <SafeAreaView></SafeAreaView>;
}
export default SignIn;
