const express =  require('express');
const compression = require('compression');
const path = require('path');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');

// SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
const config = require('./config');

const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');
const blogRoutes = require('./routes/blog');

const robotsOptions = {
    root: path.join(__dirname, "../static"),
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
};


const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'Plans secret passwords'
    }
];

mongoose.connect(config.DB_URL, { useNewUrlParser: true})
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));

// async () => (await mongoose.connect(config.DB_URL, { useNewUrlParser: true}));

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(compression());
        server.use(bodyParser.json());

        server.use('/api/v1/books', bookRoutes);
        server.use('/api/v1/portfolios', portfolioRoutes);
        server.use('/api/v1/blogs', blogRoutes);

        server.get('/robots.txt', (req, res) => {
            return res.status(200).sendFile('robots.txt', robotsOptions);
        });







        // server.get('/portfolio/:id', (req, res) => {
        //     console.log('--------------Serving /portfolio/:id request!----------------');
        //     console.log(req.query);
        //     const actualPage = '/portfolio';
        //     const queryParams = { id: req.params.id };
        //     return app.render(req, res, actualPage, queryParams);
        // });

        server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
            return res.json(secretData);
        });

        server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
            console.log(req.user);
            return res.json(secretData);
        });

        server.get('*', (req, res) => {
            console.log('--------------Serving all of the requests!----------------');
            return handle(req, res);
        });


        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access!'});
            }
        });

        const PORT = process.env.PORT || 3000;


        server.use(handle).listen(PORT, (err) => {
            if (err) { throw err; }

            console.log(`> Ready on port ` + PORT);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });

