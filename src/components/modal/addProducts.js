import {Form, Input, Button } from 'antd'
import Modal from 'react-modal'
import './addProductsStyles.css'

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

export const AddProductsModal = ({handleCloseModal, modalIsVisible, handleRequest}) => {

  const onFinish = (values) => {
    handleRequest(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return <Modal 
  isOpen={modalIsVisible}
  onRequestClose={handleCloseModal}
  style={customStyles}>
    <h1 className="titleAdd">Adicionar um Item</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item
        label="Nome"
        name="name"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: "Insira o nome do produto"
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Imagem"
        name="img_url"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: "Insira a url de uma imagem do produto"
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Preço"
        name="price"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: "Insira o preço do produto"
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Descrição"
        name="description"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: "Insira a descrição do produto"
          }
        ]}
        >
        <Input.TextArea className="textArea"/>
      </Form.Item><br />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
        >
        <Button type="primary" htmlType="submit" className="btnAdd">
          Adicionar
        </Button>
      </Form.Item>
    </Form>
</Modal>
}