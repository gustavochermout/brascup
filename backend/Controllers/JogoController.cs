using Microsoft.AspNetCore.Mvc;
using BrasCup.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BrasCup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JogoController : ControllerBase
    {
        private readonly BrasCupContext _context; 

        public JogoController(BrasCupContext context)
        {
            _context = context;
        }   

        [HttpGet]
        public async Task<ActionResult<List<Jogo>>> GetAll() => await _context.Jogo.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Jogo>> GetJogo(int id)
        {
            var jogo = await _context.Jogo.FindAsync(id);

            if (jogo == null)
                return NotFound();

            return jogo;    
        } 

        [HttpPost]
        public async Task<ActionResult<Jogo>> PostJogo(Jogo jogo)
        {
            _context.Jogo.Add(jogo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetJogo), new {id = jogo.Id}, jogo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutJogo(int id, Jogo jogo)
        {
            if (id != jogo.Id)
                return BadRequest();

            _context.Entry(jogo).State = EntityState.Modified;

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
        public async Task<ActionResult<Jogo>> DeleteJogo(int id)
        {
            var jogo = await _context.Jogo.FindAsync(id);

            if (jogo == null)
                return NotFound();

            _context.Jogo.Remove(jogo);
            await _context.SaveChangesAsync();

            return jogo;
        }
    }
}