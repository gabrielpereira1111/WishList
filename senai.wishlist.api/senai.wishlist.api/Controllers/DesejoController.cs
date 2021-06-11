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

        /// <summary>
        /// Listar todos os desejos
        /// </summary>
        /// <returns>Uma lista de desejos</returns>
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

        /// <summary>
        /// Cadastra um novo Desejo
        /// </summary>
        /// <param name="novoDesejo">Credenciais desse novo desejo</param>
        /// <returns>Status Code 201 - Created</returns>
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

        /// <summary>
        /// Deletar um desejo
        /// </summary>
        /// <param name="id">Id do desejo que será deletado</param>
        /// <returns>Um status code 204 - NoContent</returns>
        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            try
            {
                _desejoRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

    }
}
