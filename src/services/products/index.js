import api from "../http"

 const getAllProducts = () => {
    return api.get('/items')
}

const addItems = () => {
  return api.post('/item/add')
}

const deleteItem = () => {
  return api.delete('/item/:id')
}

export {getAllProducts, addItems, deleteItem}