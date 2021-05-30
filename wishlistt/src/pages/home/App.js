import './App.css';

import {Component} from 'react'


class WishList extends Component{
    constructor(props){
        super(props)
        this.state= {
            listaDesejo : [],
            descricao : '',
            idUsuario: 0
        }
    }

    buscarDesejos = () => {
        fetch("http://localhost:5000/api/desejo")
        .then(resposta => resposta.json())
        .then(data => this.setState({listaDesejo : data}))
        .catch(erro => console.log(erro))
    }

    cadastrarDesejo = (event) => {

        event.preventDefault()
        
        fetch('http://localhost:5000/api/desejo', {
            method : 'POST',
            body : JSON.stringify(
                {
                    idUsuario : this.state.idUsuario,
                    descricao : this.state.descricao
                }
                ),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        .then(console.log("Desejo cadastrado!"))
        .catch(erro => console.log(erro))

        .then(this.buscarDesejos)
    }

    atualizaDesejo = async (event) => {
        await this.setState({ descricao : event.target.value})
        console.log(this.state.descricao)
    }

    atualizaIdUsuario = async(event) => {
        await this.setState({idUsuario : event.target.value})
        console.log(this.state.idUsuario)
    }

    limparCampos = () => {
        this.setState({
            idUsuario : 0,
            descricao : ''
        })
    }

    componentDidMount(){
        this.buscarDesejos()
    }

    render(){
        return(
            <div>
                <header className="header1">
                    <h1 className='ht'>Wish List</h1>
                </header>
                <main>
                    <section className='s1'>
                        <form onSubmit={this.cadastrarDesejo}>
                            <div>

                                <input
                                className="in1"
                                type="text"
                                onChange={this.atualizaIdUsuario}
                                placeholder="Id"
                                />

                                <input
                                className='in2'
                                type="text"
                                value={this.state.descricao}
                                onChange={this.atualizaDesejo}
                                placeholder="Inserir Desejo"
                                />

                                <button className='btn1' type="submit" disabled={this.state.descricao === '' ? 'none' : ''}>Cadastrar</button>
                               
                                
                            </div>
                            
                        </form>

                        <button className='btn2' onClick={this.limparCampos} >Cancelar</button> 
                    </section>

                    <section className='s2'>
                        <table className='tt'>
                            <thead className='th'>
                                <tr className='tr1'>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Desejos</th>
                                </tr>
                            </thead>

                            <tbody className='tb'>
                                {
                                    this.state.listaDesejo.map(d => {
                                        return(
                                            <tr className='tr2' key={d.idDesejo}>
                                                <td>{d.idDesejo}</td>
                                                <td>{d.idUsuarioNavigation.email}</td>
                                                <td>{d.descricao}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}

function App() {
  return (
    <WishList/>
  );
}

export default App;
