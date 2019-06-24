import { favoriteResolver } from './favorite'
import { favoritesResolver } from './favorites'
import { myFavoritesResolver } from './my-favorites'

import { updateFavorite } from './update-favorite'
import { createFavorite } from './create-favorite'
import { deleteFavorite } from './delete-favorite'

export const Query = {
  ...favoritesResolver,
  ...favoriteResolver,
  ...myFavoritesResolver
}

export const Mutation = {
  ...updateFavorite,
  ...createFavorite,
  ...deleteFavorite
}
