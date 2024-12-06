import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import store from './src/store/store';
import { Provider} from 'react-redux';
const queryClient = new QueryClient();


function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
    </Provider>
  );
}



export default App;
