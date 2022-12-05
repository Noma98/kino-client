import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ThemeProvider} from 'styled-components/native';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {createStackNavigator} from '@react-navigation/stack';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

import {theme} from '@/styles/theme';
import SignIn from '@screens/SignIn';
import FasIconBtn from '@/components/common/FasIconBtn';

library.add(fas);
const Stack = createStackNavigator();
const queryClient = new QueryClient();

function App() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          ref={navigationRef}
          theme={{
            ...DefaultTheme,
            colors: {...DefaultTheme.colors, background: theme.colors.black},
          }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.grayDark}
          />
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
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
