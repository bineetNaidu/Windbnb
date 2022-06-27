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

export type CreateHostInput = {
  avatar_url: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['Int'];
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
  hostEmail: Scalars['String'];
  images: Array<Scalars['String']>;
  isSuperhost: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
};

export type Host = {
  __typename?: 'Host';
  avatar_url: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['Int'];
  rooms: Array<Room>;
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHost: Host;
  createRoom: Room;
  deleteRoom: Scalars['Boolean'];
};


export type MutationCreateHostArgs = {
  data: CreateHostInput;
};


export type MutationCreateRoomArgs = {
  data: CreateRoomInput;
};


export type MutationDeleteRoomArgs = {
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  host?: Maybe<Host>;
  room?: Maybe<Room>;
  rooms: Array<Room>;
};


export type QueryHostArgs = {
  email: Scalars['String'];
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
  host?: Maybe<Host>;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  isSuperhost: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type HostFragmentFragment = { __typename?: 'Host', id: number, name: string, email: string, phoneNumber: number, country: string, avatar_url: string };

export type CreateHostMutationVariables = Exact<{
  data: CreateHostInput;
}>;


export type CreateHostMutation = { __typename?: 'Mutation', createHost: { __typename?: 'Host', id: number, name: string, email: string, phoneNumber: number, country: string, avatar_url: string } };

export type GetHostQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetHostQuery = { __typename?: 'Query', host?: { __typename?: 'Host', id: number, name: string, email: string, phoneNumber: number, country: string, avatar_url: string, rooms: Array<{ __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string }> } | null };

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


export type GetRoomQuery = { __typename?: 'Query', room?: { __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string, host?: { __typename?: 'Host', id: number, name: string, email: string, phoneNumber: number, country: string, avatar_url: string } | null } | null };

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', rooms: Array<{ __typename?: 'Room', id: string, name: string, images: Array<string>, rating: number, apartmentType: string, location: string, isSuperhost: boolean, beds: number, bedrooms: number, bathrooms: number, guests: number, price: number, description: string, cancellable: boolean, hasTv: boolean, hasKitchen: boolean, hasAirconditioning: boolean, hasWifi: boolean, hasFreeParking: boolean, createdAt: string, updatedAt: string }> };

export const HostFragmentFragmentDoc = gql`
    fragment HostFragment on Host {
  id
  name
  email
  phoneNumber
  country
  avatar_url
}
    `;
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
export const CreateHostDocument = gql`
    mutation createHost($data: CreateHostInput!) {
  createHost(data: $data) {
    ...HostFragment
  }
}
    ${HostFragmentFragmentDoc}`;
export const GetHostDocument = gql`
    query getHost($email: String!) {
  host(email: $email) {
    ...HostFragment
    rooms {
      ...RoomFragment
    }
  }
}
    ${HostFragmentFragmentDoc}
${RoomFragmentFragmentDoc}`;
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
    host {
      ...HostFragment
    }
  }
}
    ${RoomFragmentFragmentDoc}
${HostFragmentFragmentDoc}`;
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
    createHost(variables: CreateHostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateHostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateHostMutation>(CreateHostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createHost', 'mutation');
    },
    getHost(variables: GetHostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHostQuery>(GetHostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHost', 'query');
    },
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
    