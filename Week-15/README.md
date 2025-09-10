# Docker

Docker is a tool that puts your app and everything it needs into a box (called a container), so it works the same anywhere.

### For Example

You're a chef who wants to share your biryani recipe with others.

You send someone just the recipe, but when they try to cook it, it doesn't taste the same.

Why? Because they have different ingredients, different cooking tools, and maybe a different stove.

This is what happens in programming too:

> "It works on my laptop but not on yours."

Instead of just sending the recipe, you send the entire kitchen:

- With your own ingredients 

- Your own stove 

- Your own utensils 

- Everything exactly how you use it.

Now the other person will cook exactly the same biryani no matter where they are.
## That’s What Docker Does!
- It packs your app along with everything it needs (like code, Node.js version, libraries, etc.) into one container.

- So when someone runs that container, it works exactly the same on their machine, in production, or in the cloud.

### Ist project 
```
docker run hello-world
```
### For any Help
```
docker --help
```


##  What I Learned Today
- Installed and set up Docker with WSL2
- Ran first container: `docker run hello-world`
- Managed containers: `docker ps`, `docker stop`, `docker rm`
- Managed images: `docker images`, `docker rmi`
- Learned about detached mode `-d`
- Ran Nginx container and accessed it at `http://localhost:8080`
- Edited files with `vim` (and learned how to exit 😅)


