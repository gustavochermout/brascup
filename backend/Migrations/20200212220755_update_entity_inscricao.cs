using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class update_entity_inscricao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inscricao_Time_timeId",
                table: "Inscricao");

            migrationBuilder.DropForeignKey(
                name: "FK_Inscricao_Torneio_torneioId",
                table: "Inscricao");

            migrationBuilder.RenameColumn(
                name: "torneioId",
                table: "Inscricao",
                newName: "TorneioId");

            migrationBuilder.RenameColumn(
                name: "timeId",
                table: "Inscricao",
                newName: "TimeId");

            migrationBuilder.RenameIndex(
                name: "IX_Inscricao_torneioId",
                table: "Inscricao",
                newName: "IX_Inscricao_TorneioId");

            migrationBuilder.RenameIndex(
                name: "IX_Inscricao_timeId",
                table: "Inscricao",
                newName: "IX_Inscricao_TimeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Inscricao_Time_TimeId",
                table: "Inscricao",
                column: "TimeId",
                principalTable: "Time",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Inscricao_Torneio_TorneioId",
                table: "Inscricao",
                column: "TorneioId",
                principalTable: "Torneio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inscricao_Time_TimeId",
                table: "Inscricao");

            migrationBuilder.DropForeignKey(
                name: "FK_Inscricao_Torneio_TorneioId",
                table: "Inscricao");

            migrationBuilder.RenameColumn(
                name: "TorneioId",
                table: "Inscricao",
                newName: "torneioId");

            migrationBuilder.RenameColumn(
                name: "TimeId",
                table: "Inscricao",
                newName: "timeId");

            migrationBuilder.RenameIndex(
                name: "IX_Inscricao_TorneioId",
                table: "Inscricao",
                newName: "IX_Inscricao_torneioId");

            migrationBuilder.RenameIndex(
                name: "IX_Inscricao_TimeId",
                table: "Inscricao",
                newName: "IX_Inscricao_timeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Inscricao_Time_timeId",
                table: "Inscricao",
                column: "timeId",
                principalTable: "Time",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Inscricao_Torneio_torneioId",
                table: "Inscricao",
                column: "torneioId",
                principalTable: "Torneio",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
