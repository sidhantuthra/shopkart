import React from 'react';
import Modal from 'react-modal';
import MonthlyRevenue from './MonthlyRevenue';
import style from './style.css';

class PopUp extends React.Component extends MonthlyRevenue{
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div className={style.modalWrapper}>
        <MonthlyRevenue handleClick={this.toggleModal}>
          click to open modal
        </MonthlyRevenue>
        <Modal
          className={{ base: [style.base]}}
          overlayClassName={{ base: [style.overlayBase] }}
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
        >
          <img
            onClick={this.toggleModal}
            src={data.src}
            alt='image displayed in modal'
          />
          <span className={style.text}>{data.description}</span>
        </Modal>
      </div>
    );
  }
}

export default PopUp;