import { useState } from 'react';
import Modal from './Modal';

function OpenModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='openModal'>
      <button
        className='openModal'
        onClick={() => setIsOpen(true)}
      >
        {' '}
        Open Modal
      </button>
      <Modal
        onClose={() => setIsOpen(false)}
        open={isOpen}
      />
    </div>
  );
}

export default OpenModal;
