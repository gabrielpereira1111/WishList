using System;
using System.Collections.Generic;

#nullable disable

namespace senai.wishlist.api.Domains
{
    public partial class Desejo
    {
        public int IdDesejo { get; set; }
        public int IdUsuario { get; set; }
        public string Descricao { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
