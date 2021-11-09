import { Card } from "antd";
import './styles.css'

const ProductCard = ({name,img_url, price, description, onClick}) => {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a className="cardLink">
  <Card className="Card">
  <h2 className="CardName">{name}</h2>
  <img className="CardImg" alt={name} src={img_url} width="180" height="100"/>
    <div className="CardContent">
        <p><small>{description}</small></p>
        <p className="ProductPrice">R$ {price}</p>
    </div>
  </Card>
  </a>

}

export {ProductCard}
