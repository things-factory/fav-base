import { Favorite } from './favorite'
import { NewFavorite } from './new-favorite'
import { FavoritePatch } from './favorite-patch'
import { FavoriteList } from './favorite-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createFavorite (
    favorite: NewFavorite!
  ): Favorite

  updateFavorite (
    id: String!
    patch: FavoritePatch!
  ): Favorite

  deleteFavorite (
    id: String!
  ): Favorite

  publishFavorite (
    id: String!
  ): Favorite
`

export const Query = `
  favorites(filters: [Filter], pagination: Pagination, sortings: [Sorting]): FavoriteList
  favorite(id: String!): Favorite
  myFavorites(userId: String!): [Favorite]
`

export const Types = [Filter, Pagination, Sorting, Favorite, NewFavorite, FavoritePatch, FavoriteList]
