import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Clear from '@mui/icons-material/Clear';

export default function DialogBox({ isOpen, onClose, children, width = '100%' }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <div className="relative">
        <IconButton
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          sx={{
            position: 'absolute',
            right: 4,
            top: 4,
            zIndex: 10,
          }}
        >
          <Clear />
        </IconButton>
        <DialogTitle>
          {/* You can add a custom title here if needed */}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
}