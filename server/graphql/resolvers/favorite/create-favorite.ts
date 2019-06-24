import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const createFavorite = {
  async createFavorite(_: any, { favorite }, context: any) {
    const repository = getRepository(Favorite)
    const newFavorite = {
      id: uuid(),
      domain: context.domain,
      userId: favorite.userId,
      routing: favorite.routing
    }

    return await repository.save(newFavorite)
  }
}
