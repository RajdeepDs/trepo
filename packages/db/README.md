# DB

We are using [turso](https://turso.tech) and sqlite as database to store the
data.

## Development

Install the [Turso CLI](https://docs.turso.tech/reference/turso-cli).

Setup your database and
[Drizzle ORM](https://orm.drizzle.team/learn/tutorials/drizzle-with-turso).

Add the environment variables to root `.env` file of your project:

```env
TURSO_CONNECTION_URL=<your_database_url>
TURSO_AUTH_TOKEN=<your_database_auth-token>
```

Start the migration script inside of `/packages/db` to have the database schema
up to date:

```bash
$ pnpm migrate
```

You should be ready to go! Check out the Drizzle Studio to see if your tables
have been created:

```$
$ pnpm studio
```
