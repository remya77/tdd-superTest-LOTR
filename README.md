# Lab: Testing Express with Jest and SuperTest

## Directions

### Description

You have a partially implemented API and some tests that have already been written for it. As TDD suggests, the testing part of the code has been completed first, leaving your to write the express code so that all tests pass.

### Getting Set Up

1. Run `npm i` to install the packages.

1. Seed your database like so:

```
psql -f seed.sql -U postgres
```

NOTE - the password for user postgres is `postgres`

### Running tests

```
npm run test
```

## Hungry for More?

### Description

In `tests/app.test.js`, add tests for the following and then implement them in express:

- Test deleting Gandalf
- Test updating Frodo's age to 51
