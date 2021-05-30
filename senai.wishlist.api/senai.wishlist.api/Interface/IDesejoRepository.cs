using senai.wishlist.api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.wishlist.api.Interface
{
    interface IDesejoRepository
    {
        /// <summary>
        /// Cadastra um novo desejo
        /// </summary>
        /// <param name="novoDesejo">Credenciais desse novo desejo</param>
        void Cadastrar(Desejo novoDesejo);
        /// <summary>
        /// Lista todos os desejos 
        /// </summary>
        /// <returns>Uma lista de desejos</returns>
        List<Desejo> ListarTudo();
    }
}
