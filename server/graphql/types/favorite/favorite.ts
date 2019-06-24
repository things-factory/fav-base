import { gql } from 'apollo-server-koa'

export const Favorite = gql`
  type Favorite {
    id: String
    domain: Domain
    userId: String
    routing: String
  }
`
