using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.wishlist.api.Domains;
using senai.wishlist.api.Interface;
using senai.wishlist.api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.wishlist.api.Controllers
{
    //Define que a resposta da API será em JSON
    [Produces("application/json")]      
    [Route("api/[controller]")]
    [ApiController]
    public class DesejoController : ControllerBase
    {
        private IDesejoRepository _desejoRepository { get; set; }

        public DesejoController()
        {
            _desejoRepository = new DesejoRepository();
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_desejoRepository.ListarTudo());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }


        [HttpPost]
        public IActionResult Post(Desejo novoDesejo)
        {
            try
            {
                _desejoRepository.Cadastrar(novoDesejo);
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
