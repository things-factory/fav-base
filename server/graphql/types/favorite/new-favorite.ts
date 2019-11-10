import gql from 'graphql-tag'

export const NewFavorite = gql`
  input NewFavorite {
    userId: String!
    routing: String!
  }
`
