# ManagingClasses

A FullStack application to manage classes and organize students schedules

## Backend

To run the backend is necessary to have a running Postgres database, the used version for development was the 15, you can one using the docker compose file and the command  
```bash
docker compose up -d
```

To configure the backend you have to create a .env file inside the api folder, following the example in the file .env.example. After the configuration you can run, inside the api folder, the command
```bash
yarn install
yarn start
```

Examples of how to send requests can be found in the test folder

## Front End

--- IN DEVELOPMENT ---