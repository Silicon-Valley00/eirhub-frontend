//Use the first section if you're not working with message section

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from '../src/Store/ReducerStore';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <App />
         </PersistGate>
      </Provider>
   </BrowserRouter>
);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/ReducerStore';
import { CometChat } from '@cometchat-pro/chat';
import * as CONSTANTS from './constants/constants';

let appSetting = new CometChat.AppSettingsBuilder()
   .subscribePresenceForAllUsers()
   .setRegion(CONSTANTS.APP_REGION)
   .autoEstablishSocketConnection(true)
   .build();

CometChat.init(CONSTANTS.APP_ID, appSetting).then(
   () => {
      alert('worked');
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
         <BrowserRouter>
            <Provider store={store}>
               <React.StrictMode>
                  <App />
               </React.StrictMode>
            </Provider>
         </BrowserRouter>
      );
   },
   (error) => {
      alert('did not work');
   }
);
*/
