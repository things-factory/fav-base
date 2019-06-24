import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities/favorite'

export const myFavoritesResolver = {
  async myFavorites(_: any, { userId }, context: any) {
    const repository = getRepository(Favorite)
    return await repository.find({
      where: {
        userId,
        domain: context.domain
      }
    })
  }
}
