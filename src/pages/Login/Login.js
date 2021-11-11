import './styles.css'


const Login = () => {

  const userAdmin = {
    name: 'admin',
    password: 'admin'
  }

  const checkUser = (e) =>{
    const name = document.getElementById('nameInput').value
    const password = document.getElementById('senhaInput').value

    if(name === userAdmin.name && password === userAdmin.password){
      console.log('entrou')
    } else {
      console.log('login invalidas')
    }
  }
  
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

export {Login}