import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '@screens/SignIn';
import {theme} from '@/styles/theme';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {QueryClientProvider, QueryClient} from 'react-query';

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
                backgroundColor: theme.colors.main,
              },
              headerTitleStyle: {
                fontSize: theme.textSize.m,
                color: 'white',
              },
              headerTitleAlign: 'center',
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
