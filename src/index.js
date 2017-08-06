import express from "express";
import routes from "./routes";

const app = express();

routes(app);

app.use('/', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
