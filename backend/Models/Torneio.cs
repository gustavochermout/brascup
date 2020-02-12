using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Torneio
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}