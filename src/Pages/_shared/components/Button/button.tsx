import { Button, SxProps } from '@mui/material';

type GenericButtonProps = {
   variant: 'contained' | 'outlined';
   text: string;
   onClick: () => void;
   type: 'submit' | 'button' | 'reset';
   sx?: SxProps;
};

const GenericButton = ({
   variant,
   text,
   onClick,
   type,
   sx,
}: GenericButtonProps) => {
   return (
      <Button sx={{ ...sx }} type={type} onClick={onClick} variant={variant}>
         {text}
      </Button>
   );
};

export default GenericButton;
