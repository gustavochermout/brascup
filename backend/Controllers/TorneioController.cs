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

        [HttpGet("classificacao/{torneioId}")]
        public async Task<List<Classificacao>> GetDataFromDbBySqlQuery(int torneioId)
        {
            return await _context.Classificacao.FromSqlRaw(
                " SELECT " + 
                "     ROW_NUMBER() OVER (ORDER BY Classificacao.\"pontos\" DESC, Classificacao.\"vitorias\" DESC, Classificacao.\"saldogols\" DESC) AS Id," +
                "     * " +
                " FROM " +
                " ( " +
                "     SELECT " +
                "         Placar.\"Nome\", " +
                "         SUM(Placar.\"pontos\") AS Pontos," +
                "         SUM(Placar.\"partidas\") AS Partidas," +
                "         SUM(Placar.\"vitorias\") AS Vitorias," +
                "         SUM(Placar.\"empates\") AS Empates," +
                "         SUM(Placar.\"derrotas\") AS Derrotas," +
                "         SUM(Placar.\"golsfeitos\") AS GolsFeitos," +
                "         SUM(Placar.\"golssofridos\") AS GolsSofridos," +
                "         SUM(Placar.\"saldogols\") AS SaldoGols" +
                "     FROM " +
                " (" +
                "     SELECT" +
                "         \"Time\".\"Nome\"," +
                "         COUNT(\"Jogo\".\"Id\") as Partidas," +
                "         SUM(\"Jogo\".\"PontuacaoTimeCasa\") AS pontos," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeCasa\" = 3 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS vitorias," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeCasa\" = 1 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS empates," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeCasa\" = 0 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS derrotas," +
                "         SUM(\"Jogo\".\"GolsTimeCasa\") AS GolsFeitos," +
                "         SUM(\"Jogo\".\"GolsTimeVisitante\") AS GolsSofridos," +
                "         SUM(\"Jogo\".\"GolsTimeCasa\" - \"Jogo\".\"GolsTimeVisitante\") AS SaldoGols" +
                "     FROM" +
                "         public.\"Jogo\" " +
                "     JOIN" +
                "         public.\"Time\" " +
                "         ON \"Jogo\".\"TimeCasaId\" = \"Time\".\"Id\" " +
                "     WHERE" +
                "         \"Jogo\".\"TorneioId\" = {0}" +
                "     GROUP BY" +
                "       \"Time\".\"Nome\" " +
                "     UNION" +
                "     SELECT" +
                "         \"Time\".\"Nome\"," +
                "         COUNT(\"Jogo\".\"Id\") as Partidas, " +
                "         SUM(\"Jogo\".\"PontuacaoTimeVisitante\") AS pontos," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeVisitante\" = 3 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS vitorias," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeVisitante\" = 1 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS empates," +
                "         SUM(" +
                "             CASE" +
                "             WHEN \"Jogo\".\"PontuacaoTimeVisitante\" = 0 THEN 1" +
                "             ELSE 0" +
                "             END " +
                "         ) AS derrotas," +
                "         SUM(\"Jogo\".\"GolsTimeVisitante\") AS GolsFeitos," +
                "         SUM(\"Jogo\".\"GolsTimeCasa\") AS GolsSofridos," +
                "         SUM(\"Jogo\".\"GolsTimeVisitante\" - \"Jogo\".\"GolsTimeCasa\") AS SaldoGols" +
                "     FROM" +
                "         public.\"Jogo\" " +
                "     JOIN" +
                "         public.\"Time\" " +
                "         ON \"Jogo\".\"TimeVisitanteId\" = \"Time\".\"Id\"" +
                "     WHERE" +
                "         \"Jogo\".\"TorneioId\" = {0} " +
                "     GROUP BY" +
                "        \"Time\".\"Nome\"" +
                "     UNION" +
                "     SELECT" +
                "         \"Time\".\"Nome\"," +
                "         0 AS Pontos," +
                "         0 AS Partidas," +
                "         0 AS Vitorias," +
                "         0 AS Empates," +
                "         0 AS Derrotas," +
                "         0 AS GolsFeitos," +
                "         0 AS GolsSofridos," +
                "         0 AS SaldoGols" +
                "     FROM" +
                "         public.\"Inscricao\"" +
                "     JOIN" +
                "         public.\"Time\"" +
                "         ON \"Time\".\"Id\" = \"Inscricao\".\"TimeId\"" +
                "     WHERE" +
                "         \"Inscricao\".\"TorneioId\" = {0}" +
                " ) AS Placar" +
                " GROUP BY" +
                "     Placar.\"Nome\"" +
                " ) AS Classificacao" +
                " ORDER BY" +
                "    Classificacao.\"pontos\" DESC, Classificacao.\"vitorias\" DESC, Classificacao.\"saldogols\" DESC", torneioId                 
            ).ToListAsync();
        }
    }
}