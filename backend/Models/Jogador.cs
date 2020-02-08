using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Jogador
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public int TimeId { get; set; }
        public virtual Time time { get; set; }
    }
}