import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {useState} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  </React.StrictMode>
);


