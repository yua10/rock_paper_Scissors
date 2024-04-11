# Instructions

This folder contains a complete version of the wrong API with a database connection.

## API purpose and context

This API allows you to record **wrongs** - situations in which one person has wronged another.

If Bethany dyes Nathan's hair pink as a prank, for example, this API exists to record that event and its resolution.

## API routes

| Route | Method | Function |
| --- | --- | --- |
| `/wrongs` | `GET` | Returns a list of wrongs |
| `/people/:id` | `GET` | Returns details on a specific person |

## Installation

Run `npm install` to install all required packages.

## Setup

- Create a `.env` at the project root with the following keys:

```
PORT=XXXX
DB_URL=XXXXXXXXXX
```

`PORT` can be any valid port number; `DB_URL` should be the connection string to a Postgres database.

Run `npm run setup-db` to create all necessary database tables.

## Development

`npm run dev` starts a server with hot reloading.
