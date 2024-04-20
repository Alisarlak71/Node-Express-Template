<h1> Nodejs - Express - MongoDB <h1>
<h2> Installation </h2>
`cp .env.example .env`
`docker compose up -d`

<h2> seed admin<h2>

`docker compose exec app node ./seeders/admin.seeder.js`

<h2> login: </h2>

`{
  "username": "admin",
  "password": "123456"
}`