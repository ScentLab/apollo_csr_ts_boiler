import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { createApolloClient } from './ApolloClient'

const client = createApolloClient()

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root'));

process.env.NODE_ENV === 'production' ? serviceWorker.register() : serviceWorker.unregister();
