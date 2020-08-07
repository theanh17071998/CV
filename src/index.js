import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";
import common_ja from "./translations/ja/common.json"
import * as serviceWorker from './serviceWorker';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'vi',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      vi: {
          common: common_vi
      },
      ja: {
          common: common_ja
      }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
