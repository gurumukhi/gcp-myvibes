/* src/schema.js */
const schema = `
  schema {
    query: Query
  }
`;

const Query = `
  type Query {
    hello: Hello!
  }
`;

const Hello = `
  type Hello {
    world: World!
  }
`;
const World = `
  type World {
    text: String!
  }
`;
module.exports = [schema, Query, Hello, World];
