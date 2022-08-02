import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useFlipper} from '@react-navigation/devtools';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignIn from '@screens/SignIn';
import {theme} from '@/styles/theme';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

function App() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
        ref={navigationRef}
        theme={{
          ...DefaultTheme,
          colors: {...DefaultTheme.colors, background: theme.colors.bgLight},
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.main}
        />
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.main,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: 'white',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerTitle: '로그인'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
