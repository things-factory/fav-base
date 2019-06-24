import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const favoritesResolver = {
  async favorites(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Favorite).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}