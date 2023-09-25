import ReactDOM from 'react-dom';

function Modal({ open, onClose }) {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    height: '100vh',
    zIndex: 200,
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className='modal' style={style}>
        <p>Modal Window</p>
        <button onClick={onClose}> Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
