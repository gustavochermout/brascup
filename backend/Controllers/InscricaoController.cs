using Microsoft.AspNetCore.Mvc;
using BrasCup.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BrasCup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InscricaoController : ControllerBase
    {
        private readonly BrasCupContext _context; 

        public InscricaoController(BrasCupContext context)
        {
            _context = context;
        }   

        [HttpGet]
        public async Task<ActionResult<List<Inscricao>>> GetAll() => await _context.Inscricao.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Inscricao>> GetInscricao(int id)
        {
            var inscricao = await _context.Inscricao.FindAsync(id);

            if (inscricao == null)
                return NotFound();

            return inscricao;    
        } 

        [HttpPost]
        public async Task<ActionResult<Inscricao>> PostInscricao(Inscricao inscricao)
        {
            _context.Inscricao.Add(inscricao);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetInscricao), new {id = inscricao.Id}, inscricao);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutInscricao(int id, Inscricao inscricao)
        {
            if (id != inscricao.Id)
                return BadRequest();

            _context.Entry(inscricao).State = EntityState.Modified;

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
        public async Task<ActionResult<Inscricao>> DeleteInscricao(int id)
        {
            var inscricao = await _context.Inscricao.FindAsync(id);

            if (inscricao == null)
                return NotFound();

            _context.Inscricao.Remove(inscricao);
            await _context.SaveChangesAsync();

            return inscricao;
        }
    }
}