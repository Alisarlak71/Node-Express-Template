سلام و وقت بخیر باتوجه به اینکه مشغول به کار هستم یک روز بیشتر نتونستم کار کنم موارد زیر باقی مونده :
<ul>
  <li>validation</li>
  <li> encrypt & decrypt password</li>
  <li> filters </li>
  <li> paginations </li>
  <li> testing </li>
  <li> error handling </li>
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
