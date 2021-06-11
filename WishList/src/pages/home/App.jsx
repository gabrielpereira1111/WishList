import './App.css';
import Ract, {useState, useEffect} from 'react'
import axios from 'axios'

export default function App(){
    const[listaDesejo, setListaDesejo] = useState([])
    const[listaUsuario, setListaUsuario] = useState([])
    const[descricao, setDescricao] = useState('')
    const[idUsuario, setIdUsuario] = useState(0)

    function buscarListaDesejo(){
        axios('http://localhost:5000/api/desejo')
        .then(resposta => {
            if(resposta.status === 200){
                setListaDesejo(resposta.data)
            }
        })
        .catch(erro => console.log(erro))
    }
    useEffect(buscarListaDesejo,[])


    function buscarListaUsuarios(){
        axios('http://localhost:5000/api/usuario')
        .then(resposta => {
            if(resposta.status === 200){
                setListaUsuario(resposta.data)
            }
        })
        .catch(erro => console.log(erro))
    }
    useEffect(buscarListaUsuarios, [])
    
    function cadastrarDesejo(event){
        event.preventDefault()
        axios.post('http://localhost:5000/api/desejo', {
            idUsuario : idUsuario,
            descricao : descricao
        })

        .then(resposta => {
            if(resposta === 201){
                console.log('Desejo cadastrado!')
                buscarListaDesejo()
            }
        })

        .catch(erro => console.log(erro))
    }

    return(
        <div>
            <header className="header">
                <div className="tituloHeader">WishList</div>
            </header>
            <main>
                <section className="secaoInput">
                    <form onSubmit={cadastrarDesejo}>
                        <select 
                            className="selectionUsuario"
                            value={idUsuario}
                            onChange={(event) => {setIdUsuario(event.target.value)}}
                        >
                            <option value="0">Selecione um usuário</option>
                            {
                                listaUsuario.map(usuario => {
                                    return(
                                        <option value={usuario.idUsuario} key={usuario.idUsuario}>
                                            {usuario.email}
                                        </option>
                                    )
                                })
                            }

                        </select>
                        <input 
                            className="inputDesejo"
                            type="text"
                            placeholder="Insira o seu Desejo" 
                            value={descricao}
                            onChange={(event) => {setDescricao(event.target.value)}}
                        />
                        <button className="btn" type='submit'>Cadastrar</button>
                    </form>
                </section>

                <section className='secaoTabela'>
                    <h2 className='tituloTabela'>Lista de Desejos</h2>
                    <table className="tabela" style={{borderCollapse : 'separate', borderSpacing : '30px'}}>
                        <thead>
                            <tr>
                                <td id="tdIdHead">#</td>
                                <td id="tdUserHead">Usuário</td>
                                <td id="tdDesejoHead">Desejo</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                listaDesejo.map(desejo => {
                                    return(
                                        <tr>
                                            <td id="tdId">{desejo.idDesejo}</td>
                                            <td id="tdUser">{desejo.idUsuarioNavigation.email}</td>
                                            <td id="tdDesejo">{desejo.descricao}</td>
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
