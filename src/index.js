import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import './style/index.css';
import App from './components/App';
import { resolvers, typeDefs } from './resolvers';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
