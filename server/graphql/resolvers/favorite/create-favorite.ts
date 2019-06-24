import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const createFavorite = {
  async createFavorite(_: any, { favorite }) {
    const repository = getRepository(Favorite)
    const newFavorite = {
      id: uuid(),
      userId: favorite.userId,
      routing: favorite.routing
    }

    return await repository.save(newFavorite)
  }
}
