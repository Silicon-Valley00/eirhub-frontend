import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
   dialog: {
      '& .MuiDialog-root': {
         '& fieldset': {
            height: '40rem',
            backgroud: 'red',
         },
      },
   },
   inputField: {
      '& .MuiOutlinedInput-input': {
         '& fieldset': {
            borderRadius: '8px',
            width: '100%',
            height: '30px',
         },
         '&:hover fieldset': {
            borderColor: 'blue', // Change border color on hover
         },
         '&.Mui-focused fieldset': {
            borderColor: 'green', // Change border color on focus
         },
      },
   },
});
