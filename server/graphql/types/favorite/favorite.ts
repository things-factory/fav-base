import gql from 'graphql-tag'

export const Favorite = gql`
  type Favorite {
    id: String
    domain: Domain
    userId: String
    routing: String
  }
`
