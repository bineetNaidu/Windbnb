import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateRoomInput = {
  apartmentType: Scalars['String'];
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  beds: Scalars['Int'];
  cancellable?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  guests: Scalars['Int'];
  hasAirconditioning?: InputMaybe<Scalars['Boolean']>;
  hasFreeParking?: InputMaybe<Scalars['Boolean']>;
  hasKitchen?: InputMaybe<Scalars['Boolean']>;
  hasTv?: InputMaybe<Scalars['Boolean']>;
  hasWifi?: InputMaybe<Scalars['Boolean']>;
  images: Array<Scalars['String']>;
  isSuperhost: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom: Room;
  deleteRoom: Scalars['Boolean'];
};


export type MutationCreateRoomArgs = {
  data: CreateRoomInput;
};


export type MutationDeleteRoomArgs = {
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  room?: Maybe<Room>;
  rooms: Array<Room>;
};


export type QueryRoomArgs = {
  id: Scalars['Float'];
};

export type Room = {
  __typename?: 'Room';
  apartmentType: Scalars['String'];
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  beds: Scalars['Int'];
  cancellable: Scalars['Boolean'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  guests: Scalars['Int'];
  hasAirconditioning: Scalars['Boolean'];
  hasFreeParking: Scalars['Boolean'];
  hasKitchen: Scalars['Boolean'];
  hasTv: Scalars['Boolean'];
  hasWifi: Scalars['Boolean'];
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  isSuperhost: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type RoomFragmentFragment = { __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string };

export type CreateRoomMutationVariables = Exact<{
  data: CreateRoomInput;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string } };

export type DeleteRoomMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteRoomMutation = { __typename?: 'Mutation', deleteRoom: boolean };

export type GetRoomQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetRoomQuery = { __typename?: 'Query', room?: { __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string } | null };

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string }> };

export const RoomFragmentFragmentDoc = gql`
    fragment RoomFragment on Room {
  id
  name
  images
  rating
  apartmentType
  location
  isSuperhost
  beds
  bedrooms
  bathrooms
  guests
  price
  description
  cancellable
  hasTv
  hasKitchen
  hasAirconditioning
  hasWifi
  hasFreeParking
  createdAt
  updatedAt
}
    `;
export const CreateRoomDocument = gql`
    mutation createRoom($data: CreateRoomInput!) {
  createRoom(data: $data) {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;
export const DeleteRoomDocument = gql`
    mutation deleteRoom($id: Float!) {
  deleteRoom(id: $id)
}
    `;
export const GetRoomDocument = gql`
    query getRoom($id: Float!) {
  room(id: $id) {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;
export const GetRoomsDocument = gql`
    query getRooms {
  rooms {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createRoom(variables: CreateRoomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRoomMutation>(CreateRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createRoom', 'mutation');
    },
    deleteRoom(variables: DeleteRoomMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRoomMutation>(DeleteRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRoom', 'mutation');
    },
    getRoom(variables: GetRoomQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRoomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoomQuery>(GetRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRoom', 'query');
    },
    getRooms(variables?: GetRoomsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRoomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoomsQuery>(GetRoomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRooms', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    