<h2>To Do list : </h2>
<ul>
  <li> encrypt & decrypt password</li>
  <li> filters and sort </li>
  <li> paginations </li>
  <li> testing </li>
  <li> add services </li>
</ul>

<h2>Feature Lists :</h2>
<ul>
  <li>Developed with Node.js and Express as web framework and use MongoDB as database</li>
  <li>User CRUD with REST API</li>
  <li>Authenticate with JWT</li>
  <li>Auth Middleware</li>
  <li>Validations</li>
  <li>Error Handling</li>
  <li>Dockerized</li>
  <li>Documented by swagger</li>
</ul>

<h2> Installation </h2>
  
`cp .env.example .env`
  
`docker compose up -d`

<h2> seed admin</h2>

`docker compose exec app node ./seeders/admin.seeder.js`

<h2> login: </h2>

route : `api/v1/auth/login`

body:
`{
  "username": "admin",
  "password": "123456"
}`

<h2>Swagger documentaion: </h2>
route : `
/api-docs 
`
