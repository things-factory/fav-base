import { gql } from 'apollo-server-koa'

export const FavoritePatch = gql`
  input FavoritePatch {
    name: String
    description: String
  }
`
