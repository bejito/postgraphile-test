# PostGraphile Test

The purpose of this repository is to find the reason why the itegration tests on postgraphile middleware hang.

```bash
$ psql -f schema.sql
$ psql -f data.sql
$ yarn
$ yarn test
```

This will run the SQL in `schema.sql` and `data.sql` on your default database and launch the single test.
