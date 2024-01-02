import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 400,
};

const modal = (props) => {
  return (
    <Transition
      // {(state) => (
      //   <Modal show={state} closed={this.closeModal} />
      // )}
      in={props.show}
      // timeout={400}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          'Modal',
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting'
            ? 'ModalClosed'
            : null,
        ];
        console.log(state);
        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button
              className='Button'
              onClick={props.closed}
            >
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
