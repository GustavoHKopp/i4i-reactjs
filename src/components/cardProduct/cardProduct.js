import { Card } from "antd";
import {useState} from 'react'
import { deleteItem } from "../../services/products";
import Modal from 'react-modal'
import './styles.css'

const ProductCard = ({name,img_url, price, description, id}) => {
  const [modlaIsOpen, setModlaIsOpen] = useState(false)

  const openModalInformations = () => {
    setModlaIsOpen(true)
  }
  
  const handleCloseModal = () => {
    setModlaIsOpen(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRIght: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(53,53,53)'
    }
  }

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return( <><a className="cardLink">
    <Card className="Card" onClick={openModalInformations}>
      <h2 className="CardName">{name}</h2>
      <img className="CardImg" alt={name} src={img_url} width="180" height="100" />
      <div className="CardContent">
        <p className="ProductPrice">R$ {price}</p>
      </div>
    </Card>
  </a>
  
  <Modal 
  isOpen={modlaIsOpen}
  onRequestClose={handleCloseModal}
  style={customStyles}>
  <h1 className="modalProductName">{name}</h1>
  <img className="CardImg" alt={name} src={img_url} width="500" height="350" />
  <p className="letersModalStyles">{description}</p>
  <p className="letersModalStyles"><small>R$ {price}</small></p>
  <div className="removeItemContainer">
  <button className="removeItemButton" >Remover</button>
  </div>
</Modal>
    </>
  )

}

export {ProductCard}
