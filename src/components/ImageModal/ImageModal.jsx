import Modal from 'react-modal';
import css from "./ImageModal.module.css"
Modal.setAppElement('#root'); 

export default function ImageModal({ isOpen, onOpen, image }) {
  const closeModal = () => {
    onOpen(false);
  };


  const customStylesModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
       backgroundColor: 'transparent', 
      border: 'none' 
    },
     overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStylesModal}
    >
        <img src={image.img} alt={image.alt} className={css.img}></img>
    </Modal>  
  );
}