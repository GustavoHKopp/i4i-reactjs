import { useState } from "react"
import { ProductCard } from "../components/cardProduct/cardProduct"
import Modal from 'react-modal'
import './styles.css'
import { booleanTypeAnnotation } from "@babel/types"

  Modal.setAppElement('#root')
const HomePage = () => {
  const [products, setProducts] = useState([
    {
      img_url: 'https://m.media-amazon.com/images/I/618etkLUt9L._AC_SY450_.jpg',
      name: 'Teclado Razer Huntsman',
      price: 25000,
      description: 'teclado razer com luizinha bala caro pra desgraça'
    },
    {
      img_url: 'https://a-static.mlcdn.com.br/1500x1500/monitor-gamer-alienware-aw2521hf-240hz-g-sync-freesync-wled-full-hd-ips-245-dell/dell/maw2521hfb/2e46a25b015c26c7c95e5e96d891cf07.jpg',
      name: 'Monitor Gamer Alienware 240hz',
      price: 40000,
      description: 'monitor bala rapido pa bosta'
    },
    {
      img_url: 'https://images.kabum.com.br/produtos/fotos/49841/49841_1507735187_index_g.jpg',
      name: 'Mouse Razer Deathadder Essential',
      price: 1500,
      description: 'mousezinho brilhantionho razer caro bagarai tambem'
    },
    {
      img_url: 'https://m.media-amazon.com/images/I/31AVfnlYKYL._AC_.jpg',
      name: 'Mousepad Fortrek Speed',
      price: 400,
      description: 'mousepad bala bom dms credo vale muito a pena comprar custo beneficio total'
    },
    {
      img_url: 'https://d26lpennugtm8s.cloudfront.net/stores/112/482/rte/Headset-Multilaser-PH002-Preto-Prata-379743.jpg',
      name: 'Headset De Padariakkk',
      price: 9,
      description: 'headset top de linha '
    },
    {
      img_url: 'https://http2.mlstatic.com/D_NQ_NP_853313-MLB46039303838_052021-O.jpg',
      name: 'Oculos Filtro de Luz Azul',
      price: 200,
      description: 'oclinho pra ficar 16 hrs por dia no pc e nao machucar o olho da princesa'
    },
    {
      img_url: 'https://static.sonkey.com.br/produtos/72578/550/1.webp',
      name: 'Microfone de Atendente de Telemarketingkkkkkkk',
      price: 2000,
      description: 'microfone com a melhor qualidade de audio possivel '
    },
    {
      img_url: 'https://adrenaline.com.br/uploads/chamadas/ryzen-caixa-threadripper_chamada.jpg',
      name: 'CPU meia boca',
      price: 1909090,
      description: 'uma cpu horrivel se ela fosse um microondas nao rodava nem o prato'
    },
    {
      img_url: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-630-d@2x.png',
      name: 'Placa de Video Paia',
      price: 56000,
      description: 'placa de video ruim que nao roda nem minecraft fonte:confia'
    },
    {
      img_url: 'https://cdn.awsli.com.br/600x450/212/212554/produto/41141997/fa27d3a2f1.jpg',
      name: 'pandeiro',
      price: 90,
      description: 'pandeiro bala'
    }
  ])
  const [modlaIsOpen, setModlaIsOpen] = useState(false)

  const addProductModal = () => {
    setModlaIsOpen(true)
  }
  
  const handleCloseModal = () => {
    setModlaIsOpen(false)
  }
  
  const openModal = () => {
    return <div className="showInformationsModal">
      
    </div>
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRIght: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(53,53,53)',
    }
  }
  return<>
  <h1 className="homeName">LOJINHA DO SEU ZÉ</h1>
   <div className="HomePageContent" >
  {products?.map(({name,img_url, price, description}) => {
      return <ProductCard 
      name={name}
      price={price} 
      img_url={img_url} 
      description={description} />
  })}
</div >
<div className="addProductsContainer">
<button className="addProducts" onClick={addProductModal}>+</button>
</div>

<Modal 
isOpen={modlaIsOpen}
onRequestClose={handleCloseModal}
style={customStyles}>
<h2>Adicionar um Produto</h2>
<form className="formAddProducts">
  <label>Nome:</label><br /> 
  <input type='text' placeholder="digite o nome do produto"></input><br />
  <label>Imagem:</label><br /> 
  <input type='text' placeholder="URL da imagem do produto"></input><br />
  <label>Preço:</label><br /> 
  <input type='text' placeholder="digite o preço do produto"></input><br />
  <div className="textareaDescription">
  <label>Desrição:</label> <br /> 
  <textarea placeholder="descrição do produto" rows="5" cols="33"></textarea>
  </div>
  <div className="addProductButtonContainer">
  <button className="addProductButton">Adicionar produto</button>
  </div>
</form>
</Modal>
    </>
}

export {HomePage}