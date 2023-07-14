import './BoxDialog.css'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DialogProps } from '../../Types/types';

const BoxDialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

  useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  });

  return isDialogOpen
    ? ReactDOM.createPortal(
        <div className="dialog-overlay" onClick={handleOverlayClick}>
          <div className="dialog">
            <div className="dialog-content">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default BoxDialog;