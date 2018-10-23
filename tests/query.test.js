const { setup, teardown, runGraphQLQuery } = require("./test_helper");

beforeAll(setup);
afterAll(teardown);

test("GraphQL query nodeId", () =>
  runGraphQLQuery(
    // GraphQL query goes here:
    `{ nodeId }`,

    // GraphQL variables go here:
    {},

    // Any additional properties you want `req` to have (e.g. if you're using
    // `pgSettings`) go here:
    {
      // Assuming you're using Passport.js / pgSettings, you could pretend
      // to be logged in by setting `req.user` to `{id: 17}`:
      user: { id: 17 }
    },

    // This function runs all your test assertions:
    async (json, { pgClient }) => {
      expect(json.errors).toBeFalsy();
      expect(json.data.nodeId).toBeTruthy();

      // If you need to, you can query the DB within the context of this
      // function - e.g. to check that your mutation made the changes you'd
      // expect.
      const { rows } = await pgClient.query(
        `SELECT * FROM forum_example.post LIMIT 1`
      );
      if (rows.length !== 1) {
        throw new Error("User not found!");
      }
    }
  ));
