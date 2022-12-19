import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {StatusBar} from 'react-native';

import {theme} from '@/styles/theme';
import {useAppSelector} from '@/hooks/common/useReduxHooks';
import AuthNavigation from '@/routes/AuthNavigation';
import PublicNavigation from '@/routes/PublicNavigation';

function RootNavigation() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  const {isAuth} = useAppSelector(state => state.user);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.black,
        },
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.grayDark}
      />
      {isAuth ? <AuthNavigation /> : <PublicNavigation />}
    </NavigationContainer>
  );
}

export default RootNavigation;
