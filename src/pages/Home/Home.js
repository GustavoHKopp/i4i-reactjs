import { useEffect, useState } from "react"
import { ProductCard } from "../../components/cardProduct/cardProduct"
import Modal from 'react-modal'
import './styles.css'
import { addItems, deleteItem, getAllProducts } from "../../services/products"
import { AddProductsModal } from "../../components/modal/addProducts"
import {Spin} from 'antd'

  Modal.setAppElement('#root')
const HomePage = () => {
  const [products, setProducts] = useState([])
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userLoggade, setUserLoggade] = useState(false)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    setIsLoading(true)
    const {data} = await getAllProducts() 
    setProducts(data)
    setIsLoading(false)
  }, [])

  const openModal = () => {
    setmodalIsVisible(true)
  }
  const handleDelete = async(id) => {
    try{
     setIsLoading(true)
      await deleteItem(id)
      handleCloseModal()
      const {data} = await getAllProducts()
    setProducts(data)

    setIsLoading(false)

    } catch(e) {
      console.log(e)
    }
  }
  
  const handleCloseModal = () => {
    setmodalIsVisible(false)
  }
  const handleRequest = async ({name, img_url, price, description}) =>{
    setIsLoading(true)
  const {data} = await addItems(
    name,
    img_url,
    price,
    description
  )
  setProducts([...products, data])
  setmodalIsVisible(false)
  setIsLoading(false)
}

const userAdmin = {
  name: 'admin',
  password: 'admin'
}

const checkUser = () =>{
  const name = document.getElementById('nameInput').value
  const password = document.getElementById('senhaInput').value

  if(name === userAdmin.name && password === userAdmin.password){
    console.log('entrou')
    setUserLoggade(true)
  } else {
    console.log('login invalidas')
  }
}

if(isLoading){
  return <Spin typ="Loading..." size="large">

  </Spin>
}

  if(userLoggade === false){
    return( <>
      <div className="loginAreaContainer">
        <div className="loginArea">
          <div className="title">
          <h1 className="loginAreaTitle">LOGIN</h1>
          </div>
          <div className="inputArea">
          <label className="loginAreaText">Nome</label><br />
          <input type="text" id="nameInput" className="loginAreaInput" placeholder="digite seu nome"></input><br />
          <label className="loginAreaText">Senha</label><br />
          <input type="password" id="senhaInput" className="loginAreaInput" placeholder="digite sua senha"></input><br />
          <button className="loginAreaButton" onClick={checkUser}>ENTRAR</button>
          </div>
        </div>
      </div>
      </>)
  }
  return<>
  
  <h1 className="homeName">LOJINHA DO SEU ZÉ</h1>
  <div className="HomePageContent">
  {products?.map(({id, name, img_url, price, description}) => {
    return <ProductCard
    handleDelete={handleDelete}
    name={name}
    img_url={img_url}
    price={price}
    description={description}
    id={id} />
  })} 
  </div>

<div className="addProductsContainer">
<button className="addProducts" onClick={openModal}>+</button>
</div>

<div className="modalContainer">

  </div>
  <AddProductsModal 
  handleCloseModal={handleCloseModal} 
  modalIsVisible={modalIsVisible} 
  handleRequest={handleRequest} />
    </>
}

export {HomePage}