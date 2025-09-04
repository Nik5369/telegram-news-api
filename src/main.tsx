import { store } from '@app/providers/store/store';
import MUIProvider from '@app/providers/theme/ui/MUIProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIProvider>
        <App />
      </MUIProvider>
    </Provider>
  </React.StrictMode>
);
