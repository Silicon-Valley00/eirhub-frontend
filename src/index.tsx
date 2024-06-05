import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { theme } from './utils/theme/theme';

ReactDOM.render(
   <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <StyledEngineProvider>
            <App />
         </StyledEngineProvider>
      </LocalizationProvider>
   </ThemeProvider>,
   document.getElementById('root')
);
