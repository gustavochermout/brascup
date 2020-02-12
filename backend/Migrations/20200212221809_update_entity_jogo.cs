using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class update_entity_jogo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TorneioId",
                table: "Jogo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Jogo_TorneioId",
                table: "Jogo",
                column: "TorneioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jogo_Torneio_TorneioId",
                table: "Jogo",
                column: "TorneioId",
                principalTable: "Torneio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jogo_Torneio_TorneioId",
                table: "Jogo");

            migrationBuilder.DropIndex(
                name: "IX_Jogo_TorneioId",
                table: "Jogo");

            migrationBuilder.DropColumn(
                name: "TorneioId",
                table: "Jogo");
        }
    }
}
