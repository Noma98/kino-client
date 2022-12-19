import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

import {theme} from '@/styles/theme';
import store, {persistor} from '@/store';
import RootNavigation from '@/routes/RootNavigation';

library.add(fas);

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <RootNavigation />
          </QueryClientProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
