import { useState } from 'react';
import './Modal.scss';

export function Modal({ show, title, modalPaneClass, children }) {
  // Initialisations -----------------------------
  // State ---------------------------------------
  // Handlers ------------------------------------
  // View ----------------------------------------
  return show ? (
    <div className='ModalOverlay'>
      <div className={`ModalPane ${modalPaneClass}`}>
        <header>
          <p>{title}</p>
        </header>
        <main>{children}</main>
      </div>
    </div>
  ) : null;
}

export function useModal(isOpen, initialContent = null) {
  // Initialisations -----------------------------
  // State ---------------------------------------
  const [state, setState] = useState({ show: isOpen, content: initialContent });

  // Handlers ------------------------------------
  const open = (content) => setState({ show: true, content });
  const close = () => setState({ ...state, show: false });

  // Return --------------------------------------
  return [state.show, state.content, open, close];
}