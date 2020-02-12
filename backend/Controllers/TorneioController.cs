using Microsoft.AspNetCore.Mvc;
using BrasCup.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BrasCup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TorneioController : ControllerBase
    {
        private readonly BrasCupContext _context;

        public TorneioController(BrasCupContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Torneio>>> GetAll() => await _context.Torneio.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Torneio>> GetTorneio(int id)
        {
            var torneio = await _context.Torneio.FindAsync(id);

            if (torneio == null)
                return NotFound();

            return torneio;
        }

        [HttpPost]
        public async Task<ActionResult<Torneio>> PostTorneio(Torneio torneio)
        {
            _context.Torneio.Add(torneio);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTorneio), new {id = torneio.Id}, torneio);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTorneio(int id, Torneio torneio)
        {
            if (id != torneio.Id)
                return BadRequest();

            _context.Entry(torneio).State = EntityState.Modified;

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
        public async Task<ActionResult<Torneio>> DeleteTorneio(int id)
        {
            var torneio = await _context.Torneio.FindAsync(id);

            if (torneio == null)
                return NotFound();

            _context.Torneio.Remove(torneio);
            await _context.SaveChangesAsync();

            return torneio;
        }
    }
}