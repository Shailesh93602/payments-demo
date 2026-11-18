# Payments Demo

A small payments web app: sign in, send and request money, see a transactions feed, manage bank accounts and
notifications. React + Material UI front end (Vite), Express + lowdb back end with seeded demo data.

Used as the sample app for product demos. Based on an MIT-licensed open-source sample app; see `LICENSE`.

## Run it

Requires Node 22 or 24 and Yarn 1.

```
yarn install
yarn dev          # front end on :3000, API on :3001, seeded data
```

- `yarn build`: production build into `build/`
- `yarn db:seed:dev`: restore the seed data
- `yarn test:unit`: unit tests (Vitest)

Demo sign-in: `Heath93` / `s3cret`.
