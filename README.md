## Docker Compose
docker-compose up -d
docker-compose down -v && docker-compose up -d

## Access DB Manually
docker exec -it my_postgres psql -U myuser -d mydatabase

## Running server
node server.js