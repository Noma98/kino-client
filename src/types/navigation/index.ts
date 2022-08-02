import {StackScreenProps} from '@react-navigation/stack';

export type MainStackNavigationParamList = {
  SignIn: undefined;
};
export type SignInScreenProps = StackScreenProps<
  MainStackNavigationParamList,
  'SignIn'
>;
