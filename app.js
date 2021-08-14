const express = require('express');
const morgan = require('morgan');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//view engine
app.set('view engine', 'ejs');

//database connection
app.listen(3000);

//general routes
app.get('/', (req, res) => {
    res.render("index");
});

app.use((req, res) => {
    res.status(404).send('404 page not found');
});