using Microsoft.AspNetCore.Mvc;
using BrasCup.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BrasCup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JogadorController : ControllerBase
    {
        private readonly BrasCupContext _context; 

        public JogadorController(BrasCupContext context)
        {
            _context = context;
        }   

        [HttpGet]
        public async Task<ActionResult<List<Jogador>>> GetAll() => await _context.Jogador.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Jogador>> GetJogador(int id)
        {
            var jogador = await _context.Jogador.FindAsync(id);

            if (jogador == null)
                return NotFound();

            return jogador;    
        } 

        [HttpPost]
        public async Task<ActionResult<Jogador>> PostJogador(Jogador jogador)
        {
            _context.Jogador.Add(jogador);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetJogador), new {id = jogador.Id}, jogador);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutJogador(int id, Jogador jogador)
        {
            if (id != jogador.Id)
                return BadRequest();

            _context.Entry(jogador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Jogador>> DeleteJogador(int id)
        {
            var jogador = await _context.Jogador.FindAsync(id);

            if (jogador == null)
                return NotFound();

            _context.Jogador.Remove(jogador);
            await _context.SaveChangesAsync();

            return jogador;
        }
    }
}