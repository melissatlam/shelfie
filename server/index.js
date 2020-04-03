require("dotenv").config();
const express = require('express');
const massive = require("massive");

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
    .then(dbInstance => {
        app.set("db", dbInstance);
      })
      .catch(err => console.log(err));

app.use(express.json());


// const {getProducts, postProducts, updateProducts, removeProducts} = require('/controller')
// const app = express();
// app.use(express.json());

// app.get('/api/shelfie', getProducts);
// app.post('/api/shelfie', postProducts);
// app.put('/api/shelfies/:id', updateProducts);
// app.delete('/api/shelfie/:id', removeProducts);


// const PORT = 4000
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on PORT ${SERVER_PORT}.`);
});