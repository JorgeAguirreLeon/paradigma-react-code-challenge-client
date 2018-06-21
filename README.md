## paradigma-react-code-challenge-client

Client side app for *Paradigma digital*.

### Setup

Either by using `npm install` or `yarn`.

### Development

Either by using `npm start` or `yarn start`. This will generate a development bundle
(which is not optimized for production and renders nice error/debug messages)

It runs in `http://localhost:3000` and has hot reloading

### Tests

Component tests are run with `npm run test`

End to End test are built with _cypress_ and run with `npm run test-e2e`

### Production

### Docker

Build: `docker build -t <app-name> .`

Run: `sudo docker run -it -p <port-number>:3000 --rm <app-name>`

### Details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
