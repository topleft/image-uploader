docker-compose run image-processing-api knex migrate:latest --env test --knexfile app/knexfile.js
docker-compose run image-processing-api knex seed:run --env test --knexfile app/knexfile.js
