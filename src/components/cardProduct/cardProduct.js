import { Card } from "antd";
import {useState} from 'react'
import './styles.css'
import { DeleteProductModal } from "../modal/deleteProduct";

const ProductCard = ({handleDelete, name, img_url, price, description, id}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const openModalInformations = () => {
    setModalIsVisible(true)
  }
  
  const handleCloseModal = () => {
    setModalIsVisible(false)
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
    <DeleteProductModal handleDelete={() => handleDelete(id)} 
    handleCloseModal={handleCloseModal} 
    modalIsVisible={modalIsVisible} 
    name={name} 
    price={price} 
    img_url={img_url}
    id={id} 
    description={description} />
    </>
  )
}

export {ProductCard}
