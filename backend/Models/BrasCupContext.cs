using Microsoft.EntityFrameworkCore;

namespace BrasCup.Models
{
    public class BrasCupContext : DbContext
    {
        public BrasCupContext(DbContextOptions<BrasCupContext> options) : base(options) 
        {

        }

        public DbSet<Time> Time { get; set; }
        public DbSet<Jogador> Jogador { get; set; }
        public DbSet<Torneio> Torneio { get; set; }
        public DbSet<Inscricao> Inscricao { get; set; }
        public DbSet<Jogo> Jogo { get; set; }
    }
}
