docker compose up docker-compose.yml

docker image tag cbd7f76785d7 patrykkalita/zadanie2:client

docker image push patrykkalita/zadanie2:client

docker image tag 95ccaf74143f patrykkalita/zadanie2:api

docker image push patrykkalita/zadanie2:api

docker image tag 0326fc3a370c patrykkalita/zadanie2:nginx

docker image push patrykkalita/zadanie2:nginx

docker image tag decdc72aa5b6 patrykkalita/zadanie2:worker

docker image push patrykkalita/zadanie2:worker
