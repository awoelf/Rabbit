import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($newEmail: String, $newId: String, $newNickname: String, $newPassword: String, $currentPassword: String!) {
    updateUser(newEmail: $newEmail, newId: $newId, newNickname: $newNickname, newPassword: $newPassword, currentPassword: $currentPassword) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`
