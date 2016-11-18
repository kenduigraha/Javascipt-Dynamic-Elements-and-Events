# Javascipt-Dynamic-Elements-and-Events

## How To Install
1. client : `cd client && npm install && bower install && gulp`
2. server : `cd server && npm install && npm start`

## How To Run App
1. client : `gulp`
2. server : `npm start`

## Dependencies
1. express framework
2. cors
3. bootstrap
4. jQuery
5. gulp
6. browser-sync
7. mongodb
8. mongoose
9. nodemon
10. dotenv


## Database's Structure

1. Database's name : db_todo
2. Collection's name : todo
3. Fields : content, status

## End Point API Routes
Default development host and port : http://localhost:3000

| Routes | HTTP | Action |
|--------|------|--------|
| /api/todos | GET | all todos |
| /api/todos | POST | process new todo |
| /api/todos/:id | POST | process mark todo status as done |
| /api/todos/:id | PUT | process edit todo |
| /api/todos/:id | DELETE | process delete todo |

## package.json (server)

```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.7",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}


```

## package.json (client)

```
{
  "name": "client",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bower": "^1.8.0",
    "browser-sync": "^2.17.5",
    "gulp": "^3.9.1"
  }
}


```

## File App's Structure

```
.
├── README.md
├── client
│   ├── gulpfile.js
│   ├── index.html
│   ├── javascript
│   │   └── script.js
│   ├── lib
│   │   ├── bootstrap
│   │   └── jquery
│   └── package.json
└── server
    ├── app.js
    ├── bin
    │   └── www
    ├── controllers
    │   └── todos.js
    ├── models
    │   └── todos.js
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    ├── routes
    │   └── index.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

15 directories, 14 files
```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
