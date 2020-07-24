import { Torneio } from './torneio.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TorneioService } from './torneio.service';
import { TorneioResolver } from './torneio.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Torneio])],
  providers: [TorneioService, TorneioResolver],
  exports: [TorneioService]
})

export class TorneioModule {}