import { gql } from 'apollo-server-koa'

export const NewFavorite = gql`
  input NewFavorite {
    userId: String!
    routing: String!
  }
`
