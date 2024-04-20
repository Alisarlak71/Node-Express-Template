<h2> Installation </h2>
  
`cp .env.example .env`
  
`docker compose up -d`

<h2> seed admin</h2>

`docker compose exec app node ./seeders/admin.seeder.js`

<h2> login: </h2>
route : `/api/v1/auth/login`

body:
`{
  "username": "admin",
  "password": "123456"
}`
