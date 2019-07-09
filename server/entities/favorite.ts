import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Index,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

@Entity('favorites')
@Index('ix_favorite_0', (favorite: Favorite) => [favorite.domain, favorite.userId, favorite.routing], { unique: true })
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  userId: string

  @Column('text')
  routing: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
