# basic-ssg-poc
A naive server static generator using [Express](https://expressjs.com/) and [Handlebars](https://handlebarsjs.com/)

### Available commands
`yarn dev`

Runs the app in http://localhost:5000 using [nodemon](https://www.npmjs.com/package/nodemon)

`yarn start`
Runs the app in http://localhost:5000

`yarn test`
Launches the tests

### Example of use

Browsing http://localhost:5000/comments/1 to receive an HTML fragment with some CSS.

You can change the path (up to http://localhost:5000/comments/100) to receive different responses.