import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CometChat } from '@cometchat-pro/chat';

// import store, { persistor } from './Store/ReducerStore';
import { PersistGate } from 'redux-persist/integration/react';

import { APP_ID, APP_REGION } from './constants/constants';
import store, { persistor } from './Store/ReducerStore';
import ScrollToTop from './utils/scrollToTop';

let appSetting = new CometChat.AppSettingsBuilder()
   .subscribePresenceForAllUsers()
   .setRegion(APP_REGION)
   .autoEstablishSocketConnection(true)
   .build();

// CometChat.init(APP_ID, appSetting).then(
//    () => {
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
//    }
//    ,
//    (error) => {}
// );
