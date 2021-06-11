import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App.jsx';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//Login

/*

this.setState({
    errorMessage : '', 
    isLoading : true
  })

axios.post('http://localhost:5000/api/login', {
  email : this.state.email,
  senha : this.state.senha
})

.then(resposta => {
  -->Caso o status da resposta for<--
  if(resposta.status === 200){
    localStorage.setItem('usuario-login', resposta.data.token);

    console.log('Meu token é: ' + resposta.data.token)

    this.setState({isLoading : false})
  }
}

.catch(() => {
  this.setState({errorMessage : 'E-mail ou senha inválidos ! Tente novamente', isLoading : false})
})

)


--> Função genérica que atualiza os states<--

atualizaStateCampo = (campo) => {
  this.setState({
    [campo.target.name] : campo.target.value
  })
}




render(){
  return(
    <p style={{color : red}}></p>


    --->Se o isLoading é verdadeiro habilitar botão 'Login'<---

    {
      this.state.isLoading === true && <button type="submit" disabled>
        Loading...
      </button>
    }

    {
      this.state.isLoading === false
      <button
        type="submit"
        disabled={this.state.email === '' || this.state.senha === '' && '' : 'none'}
      >
      </button>
    }
  )
}


*/