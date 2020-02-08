using Microsoft.EntityFrameworkCore;

namespace BrasCup.Models
{
    public class BrasCupContext : DbContext
    {
        public BrasCupContext(DbContextOptions<BrasCupContext> options) : base(options) 
        {

        }

        public DbSet<Time> Time { get; set; }
    }
}