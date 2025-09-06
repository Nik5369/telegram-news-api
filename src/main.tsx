import { StoreProvider } from '@app/providers/store';
import { MUIProvider } from '@app/providers/theme/ui/MUIProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <MUIProvider>
        <App />
      </MUIProvider>
    </StoreProvider>
  </React.StrictMode>
);
