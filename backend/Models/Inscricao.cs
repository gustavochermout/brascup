using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Inscricao
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int TorneioId { get; set; }
        public virtual Torneio torneio { get; set; }
        public int TimeId { get; set; }
        public virtual Time time { get; set; }
    }
}