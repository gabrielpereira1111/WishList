using Microsoft.EntityFrameworkCore;
using senai.wishlist.api.Context;
using senai.wishlist.api.Domains;
using senai.wishlist.api.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.wishlist.api.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        /// <summary>
        /// Cria um objeto do tipo WLContext chamado 'ctx', atribuindo-o a um novo objeto WLContext
        /// </summary>
        WLContext ctx = new WLContext();

        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        /// <param name="novoUsuario">Credenciais do novo usuário cadastrado</param>
        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Lista de todos os usuários
        /// </summary>
        /// <returns>Lista de usuários</returns>
        public List<Usuario> ListarTudo()
        {
            return ctx.Usuarios.Include(u => u.Desejos).ToList();
        }
    }
}
