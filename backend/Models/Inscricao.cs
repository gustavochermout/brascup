using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Inscricao
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int torneioId { get; set; }
        public virtual Torneio torneio { get; set; }
        public int timeId { get; set; }
        public virtual Time time { get; set; }
    }
}