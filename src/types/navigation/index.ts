import {StackScreenProps} from '@react-navigation/stack';

export type AuthStackNavigationParamList = {
  SignIn: undefined;
  SignUp: undefined;
};
export type SignInScreenProps = StackScreenProps<
  AuthStackNavigationParamList,
  'SignIn'
>;
export type SignUpScreenProps = StackScreenProps<
  AuthStackNavigationParamList,
  'SignUp'
>;

export type PublicStackNavigationParamList = {
  Home: undefined;
};
