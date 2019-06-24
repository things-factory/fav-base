import { getRepository } from 'typeorm'
import { Favorite } from '../../../entities'

export const deleteFavorite = {
  async deleteFavorite(_, { id }) {
    const repository = getRepository(Favorite)

    return await repository.delete(id)
  }
}
