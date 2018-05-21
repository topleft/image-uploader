docker-compose run image-processing-api knex migrate:latest --env development --knexfile app/knexfile.js
docker-compose run image-processing-api knex seed:run --env development --knexfile app/knexfile.js
