### Run locally:
```
$ docker-compose up -d
```

### Migrate the dev and test databases:
```
$ sh resetDevDb.sh
$ sh resetTestDb.sh
```

### Run api tests:
```
$ docker-compose run image-processing-api npm run test
```

### Shut down:
```
$ docker-compose stop
```

### Delete Instances:
```
$ docker-compose down
```

### Delete data volume:
```
$ docker volume rm <root dir name>_pgdata
```

### List containers:
```
$ docker ps
```

### Access DB from command line:
```
$ psql -h localhost -p 5433 -U postgres -d image_processing_dev
> password: postgres
```

