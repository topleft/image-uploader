unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
docker-compose run --rm image-processing-api npm run test
docker-compose down
