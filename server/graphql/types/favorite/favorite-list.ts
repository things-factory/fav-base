import { gql } from 'apollo-server-koa'

export const FavoriteList = gql`
  type FavoriteList {
    items: [Favorite]
    total: Int
  }
`
