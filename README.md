# Quizzy

go to quizzy-react

## run back

go to quizzy/quizzy

add .env file with next content
```shell
DATABASE_URL=postgresql://{your-username}:{your-password}@localhost:5432/{db-name}
JWT_SECRET={secret}
JWT_AGE_SECONDS={number e.g. 1000}
```

Then run prisma
```shell
npm run prisma:generate
npx prisma migrate dev
```


## run frontend

mocked json-server (in future don't need, all data from back)
```shell
json-server --watch db.json
```

then 
```shell
pnpm run dev
```
