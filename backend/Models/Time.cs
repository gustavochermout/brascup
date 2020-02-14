using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Time
    {        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tecnico { get; set; }
    }
}
