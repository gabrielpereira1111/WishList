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
    public class DesejoRepository : IDesejoRepository
    {
        /// <summary>
        /// Faz um objeto do tipo WLContext chamado 'ctx', atribuindo-o a um novo objeto WLContext
        /// </summary>
        WLContext ctx = new WLContext();
        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        /// <param name="novoDesejo">Credenciais desse novo desejo cadastrado</param>
        public void Cadastrar(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Deletar um desejo
        /// </summary>
        /// <param name="id">id do desjo deletado</param>
        public void Deletar(int id)
        {
            Desejo desejoBucado = ctx.Desejos.Find(id);

            ctx.Desejos.Remove(desejoBucado);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Lista todos os desejos
        /// </summary>
        /// <returns>Lista de desejos</returns>
        public List<Desejo> ListarTudo()
        {
            return ctx.Desejos.Include(d => d.IdUsuarioNavigation).Select(d => new Desejo 
            {
                IdDesejo = d.IdDesejo,
                Descricao = d.Descricao,
                
                IdUsuarioNavigation = new Usuario
                {
                    IdUsuario = d.IdUsuarioNavigation.IdUsuario,
                    Email = d.IdUsuarioNavigation.Email
                }
            }).ToList();
        }
    }
}
