import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               color: 'white',
               background: colors.lightBlue,
               '&:hover': {
                  background: colors.darkBlue,
               },
               width: '50%',
            },
         },
      },
   },
});
