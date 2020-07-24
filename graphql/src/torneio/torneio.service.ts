import { Injectable } from '@nestjs/common';
import { Torneio } from './torneio.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TorneioService {
  constructor(
    @InjectRepository(Torneio)
    private torneioRepository: Repository<Torneio>,
  ) {}

  findAll(): Promise<Torneio[]> {
    return this.torneioRepository.find();
  }
}