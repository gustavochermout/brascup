import { Torneio } from './torneio.model';
import { TorneioService } from './torneio.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(of => Torneio)
export class TorneioResolver {
  constructor(
    private torneioService: TorneioService,
  ) {}

  @Query(returns => [Torneio])
  async torneios(): Promise<Torneio[]> {
    return await this.torneioService.findAll();
  }
}