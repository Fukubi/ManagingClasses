# ManagingClasses

A FullStack application developed using Typescript + Vite + React to manage classes and organize students schedules

## Backend

To run the backend is necessary to have a running Postgres database, the used version for development was the 15, you can one using the docker compose file and the command  
```bash
docker compose up -d
```

To configure the backend you have to create a .env file inside the api folder, following the example in the file .env.example. After the configuration you can run, inside the api folder, the command
```bash
yarn install
yarn prisma migrate dev --name init
yarn start
```

Examples of how to send requests can be found in the test folder

## Front End

To run the backend is necessary to have the backend running so only follow these steps after the backend is working, the working backend port (right now) is only 3000. To run the frontend run these commands in the ui folder
```bash
yarn install
yarn dev
```

## TODO

- [ ] Secure the API with JWT Authentication
- [ ] Login in frontend
- [ ] Show the day of the week the user is in
