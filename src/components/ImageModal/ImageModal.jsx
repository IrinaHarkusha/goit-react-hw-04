import s from './ImageModal.module.css'
import Modal from 'react-modal'

const customStyles = {
    overlay: {
    position: 'fixed',
    backgroundColor: '#1f1e1ea6',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
      
  },
  content: {
    transform: 'translate(-50%, -50%)',
    marginRight: '-50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
  },
}

const ImageModal = ({ closeModal, modalIsOpen, imgURL }) => {
  
    return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" ariaHideApp={false}
    >
    <div className={s.modal}>
          <img src={imgURL} alt="" className={s.image} />
  
        <button onClick={closeModal} >Close</button>
      </div>
      </Modal>
  )
}


export default ImageModal
