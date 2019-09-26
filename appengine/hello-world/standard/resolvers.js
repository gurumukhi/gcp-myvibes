/* src/resolvers.js */
class Hello {
  constructor() {
    this.world = new World();
  }
}
class World {
  constructor() {
    this.text = 'Hello Rom!';
  }
}

module.exports = {
  Query: {
    // Our only Resolver, which belongs to the `Query`
    // Type that we defined before
    hello: () => new Hello(), // Return an instance of the Hello class
  },
  // Uppercase "Hello", the same as the name of the Type in `src/schema.js`
  Hello: {
    // Tell GraphQL how to get from an instance of Hello to `instance.world`
    world: hello => hello.world,
  },
};
