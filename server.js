const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config()


const productRoute = require("./src/routes/routerProduct");
const cartRoute = require("./src/routes/routerCart");
const route = require("./src/routes");


// static files
app.use(express.static(__dirname+"/src/public"));
app.use(express.urlencoded({extended:true}))


// rutas

app.use("/api", route);
app.use("/api/productos", productRoute);
app.use("/api/carrito", cartRoute);


// servidor inicializado

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})