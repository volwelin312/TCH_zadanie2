Polecenia do zbudowania poszczególnych obrazów:

docker build -f client/Dockerfile

docker build -f nginx/Dockerfile

docker build -f server/Dockerfile

docker build -f worker/Dockerfile


docker compose up
