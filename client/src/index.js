import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CometChat } from '@cometchat-pro/chat';
import * as CONSTANTS from './constants/constants';
import store, { persistor } from '../src/Store/ReducerStore';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './utils/scrollToTop';

let appSetting = new CometChat.AppSettingsBuilder()
   .subscribePresenceForAllUsers()
   .setRegion(CONSTANTS.APP_REGION)
   .autoEstablishSocketConnection(true)
   .build();

CometChat.init(CONSTANTS.APP_ID, appSetting).then(
   () => {
      ReactDOM.render(
         <BrowserRouter>
            <ScrollToTop />
            <Provider store={store}>
               <PersistGate persistor={persistor}>
                  <App />
               </PersistGate>
            </Provider>
         </BrowserRouter>,
         document.getElementById('root')
      );
   },
   (error) => {}
);
