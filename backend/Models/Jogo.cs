using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Jogo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int TorneioId { get; set; }
        public virtual Torneio torneio { get; set; }
        public int TimeCasaId { get; set; }
        public virtual Time timeCasa { get; set; }
        public int TimeVisitanteId { get; set; }
        public virtual Time timeVisitante { get; set; }
        public int GolsTimeCasa { get; set; }
        public int GolsTimeVisitante { get; set; }
        public int PontuacaoTimeCasa { get; set; }
        public int PontuacaoTimeVisitante { get; set; }           
    }
}