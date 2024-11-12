/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      username
      gamesWon
      squaresConquered
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        gamesWon
        squaresConquered
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRanking = /* GraphQL */ `
  query GetRanking($id: ID!) {
    getRanking(id: $id) {
      id
      username
      rank
      gamesWon
      squaresConquered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRankings = /* GraphQL */ `
  query ListRankings(
    $filter: ModelRankingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRankings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        rank
        gamesWon
        squaresConquered
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
