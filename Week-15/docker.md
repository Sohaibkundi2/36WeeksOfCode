<!-- ........Docker Practice..... -->

``` 
docker run -d -p 80:80 --name web-server nginx:1.27.0
 ```

- docker run: This is the correct subcommand to create and start a new container.

- -d: Runs the container in detached mode (in the background).

- -p 80:80: Publishes port 80 of the container to port 80 on the host. The format is host_port:container_port.

- --name web-server: Assigns the name web-server to the container.

- nginx:1.27.0: Specifies the Docker image and tag to use. In this case, it's the NGINX web server image with version 1.27.0.

- This command would create a running container with a web server accessible at http://localhost (or the IP address of the Docker host) on port 80.