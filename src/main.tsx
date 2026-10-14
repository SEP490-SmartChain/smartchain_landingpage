import React from 'react';

import ReactDOM from 'react-dom/client';

import { I18nProvider } from '@/i18n/I18nContext';
import LandingPage from '@/pages/LandingPage';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  </React.StrictMode>,
);
