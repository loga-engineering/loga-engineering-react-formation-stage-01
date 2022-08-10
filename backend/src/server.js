const cors = require('cors');
const express = require('express');
const clientRouter = require('./clients/client.router');
const accountRouter = require('./accounts/account.router');


const routers = [
    clientRouter,
    accountRouter
]

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let counter = 0;
app.use((req, res, next) => {
    counter++;
    req.counter = counter;
    console.log("Req: " + counter);
    next();
})

const port = 3001;

routers.forEach(router => router.addRoutes(app));

// clientRouter.addRoutes(app);
// accountRouter.addRoutes(app);

app.get('/', (req, res) => {
    res.send("Bonjour");
});

app.listen(port, () => {
    console.log("Server lance sur le port: " + port);
})