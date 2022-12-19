import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FasIconBtn from '@/components/common/FasIconBtn';
import Home from '@/screens/Home';
import {theme} from '@/styles/theme';
import {PublicStackNavigationParamList} from '@/types/navigation';

function PublicNavigation() {
  const Stack = createStackNavigator<PublicStackNavigationParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

export default PublicNavigation;
