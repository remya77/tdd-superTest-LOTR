# Lab: Testing Express with Jest and SuperTest

## Directions

Fork and clone this repository.

### Description

You have a partially implemented API and some tests that have already been written for it. As TDD suggests, the testing part of the code has been completed first, leaving your to write the express routing code in `app.js` so that all tests pass.

NB: This lab will ask you to evaluate query parameters sent in the URL path string. [Here is an article to help you out.](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)

### Getting Set Up

1. Open this repo in VS Code

1. Open the integrated terminal

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

### Tests Passing, Then Failing

Think about what the tests are doing when they run. They're making changes to the database which affect the results of subsequent runs. If you encounter tests passing then failing, try reseeding the databse after each test run.

## Hungry for More? Stretch Goal!

In `tests/app.test.js`, add tests for the following and then implement them in express:

- Test deleting Gandalf
- Test updating Frodo's age to 51
