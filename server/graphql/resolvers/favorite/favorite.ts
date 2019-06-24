import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const favoriteResolver = {
  async favorite(_, { id }, context, info) {
    const repository = getRepository(Favorite)

    return await repository.findOne(
      { id }
    )
  }
}
