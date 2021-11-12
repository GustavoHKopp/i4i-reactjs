import Modal from 'react-modal' 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRIght: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(92, 91, 91)',
  }
}

export const DeleteProductModal = (
  {handleDelete, 
  handleCloseModal, 
  modalIsVisible,id, 
  name, img_url, description, price}) => {
  return <Modal 
  isOpen={modalIsVisible}
  onRequestClose={handleCloseModal}
  style={customStyles}>
  <h1 className="modalProductName">{name}</h1>
  <img className="CardImg" alt={name} src={img_url} width="500" height="350" />
  <p className="letersModalStyles">{description}</p>
  <p className="letersModalStyles"><small>R$ {price}</small></p>
  <div className="removeItemContainer">
  <button className="removeItemButton" onClick={handleDelete}>Remover</button>
  </div>
</Modal>
}