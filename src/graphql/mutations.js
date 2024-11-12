/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createRanking = /* GraphQL */ `
  mutation CreateRanking(
    $input: CreateRankingInput!
    $condition: ModelRankingConditionInput
  ) {
    createRanking(input: $input, condition: $condition) {
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
export const updateRanking = /* GraphQL */ `
  mutation UpdateRanking(
    $input: UpdateRankingInput!
    $condition: ModelRankingConditionInput
  ) {
    updateRanking(input: $input, condition: $condition) {
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
export const deleteRanking = /* GraphQL */ `
  mutation DeleteRanking(
    $input: DeleteRankingInput!
    $condition: ModelRankingConditionInput
  ) {
    deleteRanking(input: $input, condition: $condition) {
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
