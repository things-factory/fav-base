import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('favorites')
@Index('ix_favorite_0', (favorite: Favorite) => [favorite.domain, favorite.userId, favorite.routing], { unique: true })
export class Favorite extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  userId: string

  @Column('text')
  routing: string
}
