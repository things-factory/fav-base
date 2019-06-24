import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const updateFavorite = {
  async updateFavorite(_, { id, patch }) {
    const repository = getRepository(Favorite)

    const favorite = await repository.findOne({ id })

    return await repository.save({
      ...favorite,
      ...patch
    })
  }
}
