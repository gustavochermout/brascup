using System.Collections.Generic;
using System.Threading.Tasks;
using BrasCup.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace BrasCup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeController : ControllerBase
    {
        private readonly BrasCupContext _context;

        public TimeController(BrasCupContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Time>>> GetAll() => await _context.Time.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Time>> GetTime(int id)
        {
            var time = await _context.Time.FindAsync(id);

            if (time == null)
                return NotFound();
            
            return time;
        }

        [HttpGet("torneio/{torneioId}")]
        public async Task<ActionResult<List<Time>>> GetTimeByTorneioId(int torneioId)
        {
            return await (from time in _context.Time
                join inscricao in _context.Inscricao
                on time.Id equals inscricao.TimeId
                where inscricao.TorneioId == torneioId
                select new Time(time.Id, time.Nome, time.Tecnico)).ToListAsync();   
        }

        [HttpPost]
        public async Task<ActionResult<Time>> PostTime(Time time)
        {
            _context.Time.Add(time);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTime), new { id = time.Id }, time);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTime(int id, Time time)
        {
            if (id != time.Id)
                return BadRequest();

            _context.Entry(time).State = EntityState.Modified;    

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
        public async Task<ActionResult<Time>> DeleteTime(int id)
        {
            var time = await _context.Time.FindAsync(id);

            if (time == null)
                return NotFound();

            _context.Time.Remove(time);
            await _context.SaveChangesAsync();

            return time;
        }
    }
}