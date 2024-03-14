const express = require('express');
const cors = require('cors');
const recipeRoute = require("./routes/recipeRoutes");

const app = express(); // app nesnesini tanımla

//istekdeki JSON verisini işler
app.use(express.json()); 

// cors middleware'ini tanımla
app.use(cors());

// route tanımı yap
app.use(recipeRoute); 

// dinlenecek portu belirle
app.listen(4000, () => {
    console.log("Server 4000. ci portu dinlemeye başladı");
});