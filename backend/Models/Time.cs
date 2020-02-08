using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Time
    {
        public Time()
        {
            this.Jogadores = new HashSet<Jogador>();
        }
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tecnico { get; set; }
        public virtual ICollection<Jogador> Jogadores { get; set; }
    }
}
