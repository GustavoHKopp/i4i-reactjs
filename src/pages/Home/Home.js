import { useEffect, useState } from "react"
import { ProductCard } from "../../components/cardProduct/cardProduct"
import Modal from 'react-modal'
import './styles.css'
import { addItems, getAllProducts } from "../../services/products"

  Modal.setAppElement('#root')
const HomePage = () => {
  const [products, setProducts] = useState([{}])
  const [modlaIsOpen, setModlaIsOpen] = useState(false)


  
  const addProductModal = (e) => {

    const {data} = addItems({
      
    })
  
    setProducts(data)

    setModlaIsOpen(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    const {data} = await getAllProducts()
    setProducts(data)
  }, [])

  const openModal = () => {
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
      backgroundColor: 'rgb(92, 91, 91)',
    }
  }

  return<>
  <h1 className="homeName">LOJINHA DO SEU ZÉ</h1>
  <div className="HomePageContent">
  {products?.map(({name,img_url, price, description}) => {
    return <ProductCard
    name={name}
    img_url={img_url}
    price={price}
    description={description} />
  })} 
  </div>

<div className="addProductsContainer">
<button className="addProducts" onClick={openModal}>+</button>
</div>

<div className="modalContainer">
<Modal 
isOpen={modlaIsOpen}
onRequestClose={handleCloseModal}
style={customStyles}>
<h2 className="addProductsTitle">Adicionar um Produto</h2>
<div className="formAddProducts">

  <label>Nome:</label><br /> 

  <input  
  type='text' 
  id="name"
  className="inputModal" 
  placeholder="digite o nome do produto"
  ></input><br />
  <label>Imagem:</label><br /> 

  <input  
  type='text' 
  id="img_url"
  className="inputModal" 
  placeholder="URL da imagem do produto"
  ></input><br />

  <label>Preço:</label><br /> 

  <input  
  type='text' 
  id="price"
  className="inputModal" 
  placeholder="digite o preço do produto"
  ></input><br />

  <div className="textareaDescription">

  <label>Desrição:</label> <br /> 

  <textarea 
  id="inputDescription" 
  className="textAreaModal" 
  placeholder="descrição do produto" 
  rows="5" 
  cols="33"
  ></textarea>

  </div>

  <div className="addProductButtonContainer">
  <button className="addProductButton" onClick={addProductModal}>Adicionar produto</button>
  </div>

</div>

</Modal>
  </div>
    </>
}

export {HomePage}