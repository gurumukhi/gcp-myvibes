/* src/index.js */
require('source-map-support/register');
// require('babel-polyfill');
const express = require('express');
// require('babel/polyfill');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const schema = require('./schema');
var cors = require('cors');

const app = express();
app.use(cors());

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

app.post(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(() => ({
    schema: executableSchema,
  }))
);

// Add GraphiQL Middleware
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);
// app.listen(8080);
app.listen(8080, () => {
  console.log(`App listening on port 8080`);
  console.log('Press Ctrl+C to quit.');
});
