/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer(
    $filter: ModelSubscriptionPlayerFilterInput
    $owner: String
  ) {
    onCreatePlayer(filter: $filter, owner: $owner) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer(
    $filter: ModelSubscriptionPlayerFilterInput
    $owner: String
  ) {
    onUpdatePlayer(filter: $filter, owner: $owner) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer(
    $filter: ModelSubscriptionPlayerFilterInput
    $owner: String
  ) {
    onDeletePlayer(filter: $filter, owner: $owner) {
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
export const onCreateRanking = /* GraphQL */ `
  subscription OnCreateRanking($filter: ModelSubscriptionRankingFilterInput) {
    onCreateRanking(filter: $filter) {
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
export const onUpdateRanking = /* GraphQL */ `
  subscription OnUpdateRanking($filter: ModelSubscriptionRankingFilterInput) {
    onUpdateRanking(filter: $filter) {
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
export const onDeleteRanking = /* GraphQL */ `
  subscription OnDeleteRanking($filter: ModelSubscriptionRankingFilterInput) {
    onDeleteRanking(filter: $filter) {
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
