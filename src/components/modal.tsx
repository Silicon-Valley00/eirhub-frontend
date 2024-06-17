import { Breakpoint, Dialog, DialogProps } from '@mui/material';
import React from 'react';
import { cn } from '../utils/util';

interface ModalProps extends DialogProps {
   children: React.ReactNode;
}

const Modal = ({
   children,
   maxWidth,
   open,
   onClose,
   className,
}: ModalProps) => {
   return (
      <Dialog
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         className={cn(className)}
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
         maxWidth={maxWidth ?? 'lg'}
      >
         {children}
      </Dialog>
   );
};

export default Modal;
