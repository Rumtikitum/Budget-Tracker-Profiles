const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
//
const {ApolloServer} = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');//
//

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

//
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({app});//
//

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//
if (process.env.Node_ENV === 'production'){
  app.use(express.static(path.join(_dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))};//


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true

});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//
db.once('open', () => {
  app.listen(PORT, () => {
    console.log('API server running on port ${PORT}!');
    console.log('use Graphql at http://localhost:${PORT}${server.graphqlPath}');
  });
});