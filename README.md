yarn init

create folder /src and files inside /src app.js / routes.js / server.js

yarn add express

yarn add sequelize pg

yarn add sequelize-cli -D

yarn sequelize init

move folder /config and /models into /src

create /database folder into /src

move /migrations and /seeder into /src/databse

create file .sequelizerc

rename /src/config/config.json to database.js

create folder /app into /src and move folder models to /src/app

yarn sequelize migration:create --name=create-users

yarn sequelize db:migrate

yarn add jest -D

yarn jest --init

create folder **tests**

create folders into **tests** /integration and /unit

create .env and .env.test (Creating config to DB dev and test)

yarn add dotenv

yarn add sqlite3 -D

yarn add supertest -D

create folder /controllers into /src/app

create folder /utils into /**tests**

yarn add bcryptjs

yarn add jsonwebtoken

yarn add factory-girl

yarn add faker

create folder /middleware into /src/app

create folder coverage into **tests**
