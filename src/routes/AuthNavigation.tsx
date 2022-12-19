import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FasIconBtn from '@/components/common/FasIconBtn';
import SignIn from '@/screens/SignIn';
import SignUp from '@/screens/SignUp';
import {theme} from '@/styles/theme';
import {AuthStackNavigationParamList} from '@/types/navigation';

function AuthNavigation() {
  const Stack = createStackNavigator<AuthStackNavigationParamList>();
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.mainDark,
        },
        headerTitleStyle: {
          fontSize: theme.textSize.m,
          color: theme.colors.white,
          fontWeight: '700',
        },
        headerTitleAlign: 'center',
        headerLeft: ({onPress}) => {
          return (
            <FasIconBtn
              iconName="chevron-left"
              color={theme.colors.white}
              onPress={onPress}
              iconStyle={{
                padding: 10,
                marginLeft: 20,
              }}
            />
          );
        },
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
