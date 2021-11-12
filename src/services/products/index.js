import api from "../http"

 const getAllProducts = () => {
    return api.get('/items')
}

const addItems = (name, img_url, price, description) => {
  return api.post('/item/add', {name: name, price: price, description: description, img_url: img_url}) 
}

const deleteItem = (id) => {
  return api.delete(`/item/${id}`)
}

export {getAllProducts, addItems, deleteItem}