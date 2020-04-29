<h1 align="center">
    <img src="https://ik.imagekit.io/ros8ogh9od/bootcamp-gostack_2HT-GHuTr.png" />

    GoBarber API
</h1>

## Menu
- [Technologies](#-tecnhnologies)
- [How to use](#-how-to-use)

---

## 🚀 Technologies

This API was developed during Rocketseat Bootcamp GoStack and includes the technologies below:

- [NodeJS]()
- [TypeScript]()
- [TypeORM]()
- [Multer]()
- [Express]()
- [Axios]()
- [CORS]()

---

## 🖥 How to use

In order to clone and run this API on your local machine, you'll need to follow the steps below

```bash
# Clone repository
$ git clone https://github.com/yants95/gostack11-api.git

# Enter on folder
$ cd gostack11-api

# Install dependencies
$ yarn

Now, turn on your docker app and run:

# Create docker container
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# List all containers (up and down)
PS: run docker ps -a and ensure that your container gostack_postgres is up, else run docker start gostack_postgres

After that:

# Run all migrations
$ yarn typeorm migration:run

# Start server
$ yarn dev:server
```

After you run all the commands in sequence, your API should be running at address **http://localhost:3333**

---

If you have any problems, please contact me.
