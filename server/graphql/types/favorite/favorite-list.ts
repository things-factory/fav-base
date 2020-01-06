import gql from 'graphql-tag'

export const FavoriteList = gql`
  type FavoriteList {
    items: [Favorite]
    total: Int
  }
`
