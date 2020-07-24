import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Torneio {
  
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({ nullable: false })
  nome: string;
}