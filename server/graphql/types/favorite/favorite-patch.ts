import gql from 'graphql-tag'

export const FavoritePatch = gql`
  input FavoritePatch {
    name: String
    description: String
  }
`
