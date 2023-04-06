import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

// import store, { persistor } from './Store/ReducerStore';
import { PersistGate } from 'redux-persist/integration/react';

import { APP_ID, APP_REGION } from './constants/constants';
import store, { persistor } from './Store/ReducerStore';
import ScrollToTop from './utils/scrollToTop';
import { allRoutes } from './routes';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.render(
   <Provider store={store}>
      {/* <ScrollToTop /> */}
      {/* <PersistGate persistor={persistor}> */}
      <StyledEngineProvider>
         <App />
      </StyledEngineProvider>
      {/* </PersistGate> */}
   </Provider>,
   document.getElementById('root')
);
