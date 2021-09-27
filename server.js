const express = require("express");
//const {ApolloServer} = require('apollo-server-express');
//const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//const server = new ApolloServer({
//  typeDefs,
//  resolvers
//});

//server.applyMiddleware({app});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  //Express to serve up production assets
  app.use(express.static('client/build'));
  //Expess will serve up index.html file
  //if route is not recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log('API server running on port ${PORT}!');
    console.log('use Graphql at http://localhost:${PORT}${server.graphqlPath}');
  });
});