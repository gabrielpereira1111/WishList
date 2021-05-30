using senai.wishlist.api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.wishlist.api.Interface
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        /// <param name="novoUsuario">Credenciais do novo usuário</param>
        void Cadastrar(Usuario novoUsuario);
        /// <summary>
        /// Lista os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
        List<Usuario> ListarTudo();
    }
}
