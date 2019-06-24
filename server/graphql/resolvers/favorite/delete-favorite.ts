import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const deleteFavorite = {
  async deleteFavorite(_: any, { userId, routing }, context: any) {
    const repository = getRepository(Favorite)

    return await repository.delete({
      domain: context.domain,
      userId,
      routing
    })
  }
}
