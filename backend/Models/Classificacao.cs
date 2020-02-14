namespace BrasCup.Models
{
    public class Classificacao
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Pontos { get; set; }
        public int Partidas { get; set; }
        public int Vitorias { get; set; }
        public int Empates { get; set; }
        public int Derrotas { get; set; }
        public int GolsFeitos { get; set; }
        public int GolsSofridos { get; set; }
        public int SaldoGols { get; set; }
    }
}