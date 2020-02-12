using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace backend.Migrations
{
    public partial class add_entity_jogo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jogo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TimeCasaId = table.Column<int>(nullable: false),
                    TimeVisitanteId = table.Column<int>(nullable: false),
                    GolsTimeCasa = table.Column<int>(nullable: false),
                    GolsTimeVisitante = table.Column<int>(nullable: false),
                    PontuacaoTimeCasa = table.Column<int>(nullable: false),
                    PontuacaoTimeVisitante = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jogo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Jogo_Time_TimeCasaId",
                        column: x => x.TimeCasaId,
                        principalTable: "Time",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Jogo_Time_TimeVisitanteId",
                        column: x => x.TimeVisitanteId,
                        principalTable: "Time",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Jogo_TimeCasaId",
                table: "Jogo",
                column: "TimeCasaId");

            migrationBuilder.CreateIndex(
                name: "IX_Jogo_TimeVisitanteId",
                table: "Jogo",
                column: "TimeVisitanteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jogo");
        }
    }
}
