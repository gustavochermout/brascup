using System.ComponentModel.DataAnnotations.Schema;

namespace BrasCup.Models
{
    public class Time
    {        
        public Time(int id, string nome, string tecnico)
        {
            Id = id;
            Nome = nome;
            Tecnico = tecnico;
        }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tecnico { get; set; }
    }
}
