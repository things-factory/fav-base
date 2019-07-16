import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Favorite } from './favorite'
import { FavoriteList } from './favorite-list'
import { FavoritePatch } from './favorite-patch'
import { NewFavorite } from './new-favorite'

export const Mutation = `
  createFavorite (
    favorite: NewFavorite!
  ): Favorite

  updateFavorite (
    id: String!
    patch: FavoritePatch!
  ): Favorite

  deleteFavorite (
    userId: String!
    routing: String!
  ): Favorite
`

export const Query = `
  favorites(filters: [Filter], pagination: Pagination, sortings: [Sorting]): FavoriteList
  favorite(id: String!): Favorite
  myFavorites(userId: String!): [Favorite]
`

export const Types = [Filter, Pagination, Sorting, Favorite, NewFavorite, FavoritePatch, FavoriteList]
